import React, {FunctionComponent} from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Room, { RoomDetail } from './Room/Room';
import { SearchBoxOccupancyState } from '@hotels/search-box';
import { Status } from '../../../model/search';
import Keys from "@hotels/translation-keys";
import Translation from "@hotels/translation";


interface AvailabilityProps {
  rooms: Array<RoomDetail>;
  occupancy: SearchBoxOccupancyState;
  roomStatus: Status;
  onSelect: (id: string) => void;
}

const Availability: FunctionComponent<AvailabilityProps> = (props) => {
  const rooms = () => (props.rooms && props.rooms.length > 0) 
      ? props.rooms.map((room, index) => 
          <Grid item xs={12} key={index}>
            <Room room={room} occupancy={props.occupancy} onSelect={props.onSelect} status={props.roomStatus}/>
          </Grid>) 
      : <Room occupancy={props.occupancy} status={props.roomStatus}/>;
  
  return <Paper>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1"><Translation tkey={Keys.common.room_pl}/></Typography>
      </Grid>
      {rooms()}
    </Grid>
  </Paper>;
}

export default Availability;

