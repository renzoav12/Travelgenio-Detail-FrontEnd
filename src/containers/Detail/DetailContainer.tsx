import React, { FunctionComponent, useEffect } from 'react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { AccommodationProps } from '../../components/Detail/Accommodation/Accommodation';
import { thunkSearchUpdate } from '../../actions/detail/detail.action';
import SearchBox, {SearchBoxState, SearchBoxOccupancyState, SearchBoxStayState} from '@hotels/search-box';
import { SuggestionHint, SuggestionEntry } from '@hotels/search-box/dist/Autocomplete/Autocomplete';
import { Search } from '../../model/search';
import { thunkRoomSelect } from '../../actions/room/room.action';
import { Container, Box } from "@material-ui/core";
import Detail from '../../components/Detail/Detail';
import { RoomDetail } from '../../components/Detail/Availability/Room/Room';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { fetchSuggestionSearch, fetchSuggestionSearchName, SearchNameSuggestionParameters } from '../../actions/suggestion/suggestion.action';
import { thunkSearchBoxChange } from '../../actions/searchBox/searchBox.action';
import { parseOccupancy } from '../../components/OccupancyDistribution/OccupancyDistribution';
import { parseStay } from '../../utils/stay';

interface DetailContainerProps {
  search: Search;
  accommodation: AccommodationProps;
  rooms: Array<RoomDetail>;
  accommodationLoading: boolean;
  roomsLoading: boolean;
  onSearch: (search: Search) => void;
  onSelect: (id: string) => void;
  suggestionName: string;
  suggestions: SuggestionEntry[];
  onChangeSuggestionHint: (suggestionHint: SuggestionHint) => void;
  searchSuggestionName: (params: SearchNameSuggestionParameters) => void;
  onSearchBoxChange: (state: SearchBoxState) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBox: {
      marginTop: 20,
    }
  })
);

const DetailContainer: FunctionComponent<DetailContainerProps> = props => {
  useEffect(() => {
    props.onSearch(props.search);
    props.searchSuggestionName({code: props.search.accommodationId, type: "ACCOMMODATION"});
  }, []);

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
        suggestions = {props.suggestions}/>
    </Box>
    <Detail 
      accommodation= {props.accommodation} 
      rooms={props.rooms}
      occupancy={parseOccupancy(props.search.occupancy)}
      accommodationLoading = {props.accommodationLoading} 
      roomsLoading = {props.roomsLoading} 
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
      accommodationLoading: rootState.detail.accommodationLoading,
      roomsLoading: rootState.detail.roomsLoading,
      suggestions: rootState.searchSuggestion.suggestions,
      suggestionName: rootState.searchSuggestion.suggestionName      
  };
};

export default connect(
  mapStateToProps,
  {
    onSearch: thunkSearchUpdate,
    onSelect: thunkRoomSelect,
    onChangeSuggestionHint: fetchSuggestionSearch,
    searchSuggestionName: fetchSuggestionSearchName,
    onSearchBoxChange:thunkSearchBoxChange
  }
)(DetailContainer);
