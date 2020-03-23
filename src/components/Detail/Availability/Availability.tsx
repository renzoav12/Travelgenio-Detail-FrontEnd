import React, {FunctionComponent} from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Room, { RoomDetail } from './Room/Room';

interface AvailabilityProps {
  rooms: Array<RoomDetail>;
  loading: boolean;
  onSelect: (id: string) => void;
  roomsOn: boolean;
}

const Availability: FunctionComponent<AvailabilityProps> = props => {
  const rooms = () => (props.rooms && props.rooms.length > 0) ? props.rooms.map((room, index) => 
      <Grid item xs={12} key={index}>
        <Room room={room} onSelect={props.onSelect} loading={props.loading}/>
      </Grid>) : <Grid item xs={12}><Room/></Grid>;
  
  return <Paper>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Habitaciones</Typography>
      </Grid>
      {rooms()}
    </Grid>
  </Paper>;
}

export default Availability;
