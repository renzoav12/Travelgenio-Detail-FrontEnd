import React from 'react';
import { Grid } from '@material-ui/core';
import Accommodation, { AccommodationProps } from './Content/Accommodation';
import Availability from './Availability';
import './Detail.scss';
import { RoomProps } from './Availability/Room/Room';


export interface DetailProps {
  accommodation: AccommodationProps;
  rooms: Array<RoomProps>;
}

const Detail = (props: DetailProps) => {
  return <Grid container className="otravo-detail">
          <Grid item container xs={12} className="otravo-box">
            <Accommodation {...props.accommodation}/>
          </Grid>
          <Grid item container xs={12} className="otravo-box otravo-availability">
            <Availability rooms={props.rooms}/>
          </Grid>
        </Grid>;
}

export default Detail;