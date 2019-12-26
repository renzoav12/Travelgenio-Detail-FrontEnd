import React, {SFC} from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Room, { RoomDetail } from './Room/Room';
import LinearProgress from '@material-ui/core/LinearProgress';

interface AvailabilityProps {
  rooms: Array<RoomDetail>;
  loading: boolean;
  onSelect: (id: string) => void;
}

const Availability: SFC<AvailabilityProps> = props => {
  const rooms = props.rooms.map((room, index) => 
      <Grid item xs={12} key={index}>
        <Room room={room} onSelect={props.onSelect}/>
      </Grid>);
  
  return <Paper>
    {props.loading ?
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <LinearProgress/>
      </Grid>
    </Grid>
    :
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Habitaciones</Typography>
      </Grid>
      {rooms}
    </Grid>}
  </Paper>;
}

export default Availability;
