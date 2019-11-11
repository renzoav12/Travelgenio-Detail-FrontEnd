import React, { Component } from 'react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { AccommodationProps } from '../../components/Detail/Accommodation/Accommodation';
import { thunkSearchUpdate } from '../../actions/detail/detail.action';
import { Search } from '../../model/search';
import Detail from '../../components/Detail';
import { RoomDetail } from '../../components/Detail/Availability/Room/Room';


interface DetailContainerProps {
  search: Search;
  accommodation: AccommodationProps;
  rooms: Array<RoomDetail>;
  searchUpdate: (search: Search) => void;
}

class DetailContainer extends Component<DetailContainerProps> {
  constructor(props) {
    super(props);
    this.onReserve.bind(this);
  }

  componentDidMount() {
    this.props.searchUpdate(this.props.search);
  }

  onReserve = (id:string):void => {
    console.info("RESERVE " + id);
  }

  render() {
    return <Detail accommodation= {this.props.accommodation} rooms={this.props.rooms} onReserve={this.onReserve}/>;
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
      }
  };
};

export default connect(
  mapStateToProps,
  {
    searchUpdate: thunkSearchUpdate
  }
)(DetailContainer);
