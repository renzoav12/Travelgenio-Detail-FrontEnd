import React, { FunctionComponent, useEffect } from 'react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { AccommodationProps } from '../../components/Detail/Accommodation/Accommodation';
import { thunkSearchUpdate } from '../../actions/detail/detail.action';
import { Search } from '../../model/search';
import Detail from '../../components/Detail/Detail';
import { RoomDetail } from '../../components/Detail/Availability/Room/Room';
import { thunkRoomSelect } from '../../actions/room/room.action';
import { Container } from "@material-ui/core";

interface DetailContainerProps {
  search: Search;
  accommodation: AccommodationProps;
  rooms: Array<RoomDetail>;
  accommodationLoading: boolean;
  roomsLoading: boolean;
  onSearch: (search: Search) => void;
  onSelect: (id: string) => void;
}

const DetailContainer: FunctionComponent<DetailContainerProps> = props => {
  useEffect(() => {
    props.onSearch(props.search);
  });


  return <Container maxWidth="lg">
    <Detail 
      accommodation= {props.accommodation} 
      rooms={props.rooms} 
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
      roomsLoading: rootState.detail.roomsLoading
  };
};

export default connect(
  mapStateToProps,
  {
    onSearch: thunkSearchUpdate,
    onSelect: thunkRoomSelect
  }
)(DetailContainer);
