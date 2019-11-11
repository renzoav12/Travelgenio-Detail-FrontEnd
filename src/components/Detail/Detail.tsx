import React, {SFC} from 'react';
import { Grid } from '@material-ui/core';
import Accommodation, { AccommodationProps } from './Accommodation/Accommodation';
import Availability from './Availability';
import { RoomDetail } from './Availability/Room/Room';

export interface DetailProps {
  accommodation: AccommodationProps;
  rooms: Array<RoomDetail>;
  onReserve: (id: string) => void;
}

const Detail: SFC<DetailProps> = props => {
  return <Grid container>
           <Grid item xs={12}>
            <Accommodation {...props.accommodation}/>
          </Grid>
          <Grid item xs={12}>
            <Availability rooms={props.rooms} onReserve={props.onReserve}/>
          </Grid>
        </Grid>;
}

export default Detail;