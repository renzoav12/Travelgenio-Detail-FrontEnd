import React, { Component } from 'react';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import Accommodation, { AccommodationProps } from '../../components/Detail/Content/Accommodation';

import './DetailContainer.scss';
import { thunkSearchUpdate } from '../../actions/detail/detail.action';
import { Search } from '../../model/search';


interface DetailContainerProps {
  search: Search;
  accommodation: AccommodationProps;
  searchUpdate: (search: Search) => void;
}

class DetailContainer extends Component<DetailContainerProps> {

  componentDidMount() {
    this.props.searchUpdate(this.props.search);
  }

  componentDidUpdate (prevProps) {
    //this.props.updateSearch(this.props.search);
  }

  render() {
    return <Accommodation {...this.props.accommodation}/>;
  }
}

const mapStateToProps = (rootState: RootState, ownProps) => {
  return {
      accommodation: rootState.detail.accommodation,
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
