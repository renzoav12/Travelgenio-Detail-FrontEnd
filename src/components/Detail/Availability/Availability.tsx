import React, { FunctionComponent } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Room, { RoomDetail } from './Room/Room';
import { SearchBoxOccupancyState } from '@hotels/search-box';

interface AvailabilityProps {
  rooms: Array<RoomDetail>;
  occupancy: SearchBoxOccupancyState;
  loading: string;
  onSelect: (id: string) => void;
}

const Availability: FunctionComponent<AvailabilityProps> = props => {

  const getRooms = () => (props.rooms ? props.rooms.map((room, index) =>
    <Grid item xs={12} key={index}>
      <Room room={room} occupancy={props.occupancy} onSelect={props.onSelect} loading={props.loading} />
    </Grid>) : null
  );

  return (
    props.loading !== 'loading' && props.rooms?.length > 0 ?
      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1">Habitaciones</Typography>
          </Grid>
          {getRooms()}
        </Grid>
      </Paper> : <Room occupancy={props.occupancy} loading={props.loading} />);
}

export default Availability;
