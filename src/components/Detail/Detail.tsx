import React, {FunctionComponent} from 'react';
import { Grid } from '@material-ui/core';
import Accommodation, { AccommodationProps } from './Accommodation/Accommodation';
import Availability from './Availability/Availability';
import { RoomDetail } from './Availability/Room/Room';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SearchBoxOccupancyState } from '@hotels/search-box';

export interface DetailProps {
  accommodation: AccommodationProps;
  rooms: Array<RoomDetail>;
  occupancy: SearchBoxOccupancyState;
  accommodationLoading: boolean;
  roomsLoading: boolean;
  roomsOn: boolean;
  onSelect: (id: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accommodation: {
      marginTop: 20
    },
    roomsEmpty: {
      marginTop: 20,
      marginBottom: 20 
    },
    availabilities: {
      marginTop: 20,
      marginBottom: 20
    }
  }),
);

const Detail: FunctionComponent<DetailProps> = props => {

  const classes = useStyles();

  const availability = props.roomsOn ? 
         <Grid item xs={12} className={classes.availabilities}>
            <Availability rooms={props.rooms} occupancy={props.occupancy} loading={props.roomsLoading} onSelect={props.onSelect}/>
          </Grid> : null;
  
  return <Grid container>
           <Grid item xs={12} className={props.roomsOn? classes.accommodation : classes.roomsEmpty}>
            <Accommodation accommodation={props.accommodation} loading={props.accommodationLoading}/>
          </Grid>
          {availability}
        </Grid>;
}

export default Detail;