import React, { Component } from 'react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { AccommodationProps } from '../../components/Detail/Accommodation/Accommodation';
import { thunkSearchUpdate } from '../../actions/detail/detail.action';
import { Search } from '../../model/search';
import Detail from '../../components/Detail';
import { RoomDetail } from '../../components/Detail/Availability/Room/Room';
import { thunkRoomSelect } from '../../actions/room/room.action';

interface DetailContainerProps {
  search: Search;
  accommodation: AccommodationProps;
  rooms: Array<RoomDetail>;
  accommodationLoading: boolean;
  roomsLoading: boolean;
  onSearch: (search: Search) => void;
  onSelect: (id: string) => void;
}

class DetailContainer extends Component<DetailContainerProps> {
  componentDidMount() {
    this.props.onSearch(this.props.search);
  }
  render() {
    return <Detail 
        accommodation= {this.props.accommodation} 
        rooms={this.props.rooms} 
        accommodationLoading = {this.props.accommodationLoading} 
        roomsLoading = {this.props.roomsLoading} 
        onSelect={this.props.onSelect}/>;
  }
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
