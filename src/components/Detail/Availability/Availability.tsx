import React from 'react';
import { Grid } from '@material-ui/core';
import Room, { RoomProps } from './Room/Room';
import './Availability.scss';

interface AvailabilityProps {
  rooms: Array<RoomProps>;
}

const Availability = (availability: AvailabilityProps) => {
  const rooms = availability.rooms
    .map((room, index) => 
      <Grid container item xs={12} key={index} className="otravo-room">
        <Room {...room}/>
      </Grid>);
  
  return <Grid container item xs={12}>
    <Grid item xs={12} className="otravo-title">Habitaciones</Grid>
    {rooms}
  </Grid>;
}

export default Availability;
