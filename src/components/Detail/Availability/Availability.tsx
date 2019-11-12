import React, {SFC} from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Room, { RoomDetail } from './Room/Room';

interface AvailabilityProps {
  rooms: Array<RoomDetail>;
  onSelect: (id: string) => void;
}

const Availability: SFC<AvailabilityProps> = props => {
  const rooms = props.rooms.map((room, index) => 
      <Grid item xs={12} key={index}>
        <Room room={room} onSelect={props.onSelect}/>
      </Grid>);
  
  return <Paper>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Habitaciones</Typography>
      </Grid>
      {rooms}
    </Grid>
  </Paper>;
}

export default Availability;
