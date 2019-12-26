import React, {SFC} from 'react';
import { Grid } from '@material-ui/core';
import Accommodation, { AccommodationProps } from './Accommodation/Accommodation';
import Availability from './Availability';
import { RoomDetail } from './Availability/Room/Room';

export interface DetailProps {
  accommodation: AccommodationProps;
  rooms: Array<RoomDetail>;
  accommodationLoading: boolean;
  roomsLoading: boolean;
  onSelect: (id: string) => void;
}

const Detail: SFC<DetailProps> = props => {
  return <Grid container>
           <Grid item xs={12}>
            <Accommodation accommodation={props.accommodation} loading={props.accommodationLoading}/>
          </Grid>
          <Grid item xs={12}>
            <Availability rooms={props.rooms} onSelect={props.onSelect}/>
          </Grid>
        </Grid>;
}

export default Detail;