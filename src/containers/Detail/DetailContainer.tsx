import React, { FunctionComponent, useEffect } from 'react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { AccommodationProps } from '../../components/Detail/Accommodation/Accommodation';
import { thunkSearchUpdate } from '../../actions/detail/detail.action';
import SearchBox, {SearchBoxState} from '@hotels/search-box';
import { SuggestionHint, SuggestionEntry } from '@hotels/search-box/dist/Autocomplete/Autocomplete';
import { Search, Status } from '../../model/search';
import { thunkRoomSelect } from '../../actions/room/room.action';
import { Container, Box } from "@material-ui/core";
import Detail from '../../components/Detail/Detail';
import { RoomDetail } from '../../components/Detail/Availability/Room/Room';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { fetchSuggestionSearch, fetchSuggestionSearchName, SearchNameSuggestionParameters } from '../../actions/suggestion/suggestion.action';
import { thunkSearchBoxChange } from '../../actions/searchBox/searchBox.action';
import SearchEmpty from '@hotels/search-empty';
import { parseOccupancy } from '../../components/OccupancyDistribution/OccupancyDistribution';
import { parseStay } from '../../utils/stay';
import { loadI18n } from '../../actions/i18n/i18n.action';
import Keys from "@hotels/translation-keys";
import {translate} from "@hotels/translation";
import PropTypes from "prop-types";
import { LocaleState } from '../../reducers/localeReducer';


interface DetailContainerProps {
  search: Search;
  accommodation: AccommodationProps;
  rooms: Array<RoomDetail>;
  accommodationStatus: Status;
  roomsStatus: Status;
  onSearch: (search: Search) => void;
  onSelect: (id: string) => void;
  loadI18n: () => void;
  suggestionName: string;
  suggestions: SuggestionEntry[];
  onChangeSuggestionHint: (suggestionHint: SuggestionHint) => void;
  searchSuggestionName: (params: SearchNameSuggestionParameters) => void;
  onSearchBoxChange: (state: SearchBoxState) => void;
  locale: LocaleState;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBox: {
      marginTop: 20,
    }
  })
);

const DetailContainer: FunctionComponent<DetailContainerProps> = (props, context) => {
  useEffect(() => {
    props.searchSuggestionName({code: props.search.accommodationId, type: "ACCOMMODATION"});
    props.loadI18n();
  }, []);

  useEffect(() => {
    if(props.locale.code !== null){
      props.onSearch(props.search);
    }
  }, [props.locale.code]);

  const classes = useStyles();
    
  return <Container maxWidth="lg">
    <Box className = {classes.searchBox}>
      <SearchBox
        init={
          {
            location: {
                code: props.search.accommodationId,
                type: 'ACCOMMODATION'
            },
            occupancy: parseOccupancy(props.search.occupancy),
            stay: parseStay(props.search.stay.from, props.search.stay.to)
          }
        }
        suggestionName={props.suggestionName}
        onChange={props.onSearchBoxChange} 
        onChangeSuggestionHint={props.onChangeSuggestionHint}
        horizontal = {true}
        suggestions = {props.suggestions}
        title = {translate(context, Keys.common.change_your_destination)}/>
    </Box>
    {props.rooms.length === 0 && props.roomsStatus === Status.SUCCESS ? <SearchEmpty type="info" dates={props.search.stay}></SearchEmpty>: null}
    <Detail 
      accommodation= {props.accommodation} 
      rooms={props.rooms}
      occupancy={parseOccupancy(props.search.occupancy)}
      accommodationStatus = {props.accommodationStatus} 
      roomsStatus = {props.roomsStatus} 
      onSelect={props.onSelect}/>
  </Container>;
}

const mapStateToProps = (rootState: RootState, ownProps) => {
  return {
      accommodation: rootState.detail.accommodation,
      rooms: rootState.detail.rooms,
      search: {
        accommodationId: ownProps.match.params.accommodationId,
        stay: {
          from: ownProps.match.params.stayFrom,
          to: ownProps.match.params.stayTo
        },
        occupancy: ownProps.match.params.occupancy
      },
      accommodationStatus: rootState.detail.accommodationStatus,
      roomsStatus: rootState.detail.roomsStatus,
      suggestions: rootState.searchSuggestion.suggestions,
      suggestionName: rootState.searchSuggestion.suggestionName,
      locale: rootState.locale,
  };
};
DetailContainer.contextTypes = { t: PropTypes.func };

export default connect(
  mapStateToProps,
  {
    onSearch: thunkSearchUpdate,
    onSelect: thunkRoomSelect,
    onChangeSuggestionHint: fetchSuggestionSearch,
    searchSuggestionName: fetchSuggestionSearchName,
    loadI18n: loadI18n,
    onSearchBoxChange:thunkSearchBoxChange
  }
)(DetailContainer);
