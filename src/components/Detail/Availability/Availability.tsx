import React, {FunctionComponent} from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Room, { RoomDetail } from './Room/Room';
import { SearchBoxOccupancyState } from '@hotels/search-box';

interface AvailabilityProps {
  rooms: Array<RoomDetail>;
  occupancy: SearchBoxOccupancyState;
  loading: boolean;
  onSelect: (id: string) => void;
}

const Availability: FunctionComponent<AvailabilityProps> = props => {
  const rooms = () => (props.rooms && props.rooms.length > 0) 
      ? props.rooms.map((room, index) => 
          <Grid item xs={12} key={index}>
            <Room room={room} occupancy={props.occupancy} onSelect={props.onSelect} loading={props.loading}/>
          </Grid>) 
      : <Room occupancy={props.occupancy}/>;
  
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
