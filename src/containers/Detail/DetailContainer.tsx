import React, { Component } from 'react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import Accommodation, { AccommodationProps } from '../../components/Detail/Content/Accommodation';

import './DetailContainer.scss';
import { thunkSearchUpdate } from '../../actions/detail/detail.action';
import { Search } from '../../model/search';
import Detail from '../../components/Detail';
import { RoomProps } from '../../components/Detail/Availability/Room/Room';


interface DetailContainerProps {
  search: Search;
  accommodation: AccommodationProps;
  rooms: Array<RoomProps>;
  searchUpdate: (search: Search) => void;
}

class DetailContainer extends Component<DetailContainerProps> {

  componentDidMount() {
    this.props.searchUpdate(this.props.search);
  }

  render() {
    return <Detail accommodation= {this.props.accommodation} rooms={this.props.rooms}/>;
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
