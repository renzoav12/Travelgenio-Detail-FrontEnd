import React, {FunctionComponent} from 'react';
import { Grid } from '@material-ui/core';
import Accommodation, { AccommodationProps } from './Accommodation/Accommodation';
import Availability from './Availability/Availability';
import { RoomDetail } from './Availability/Room/Room';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface DetailProps {
  accommodation: AccommodationProps;
  rooms: Array<RoomDetail>;
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

  const roomsOff = props.roomsOn ? 
         <Grid item xs={12} className={classes.availabilities}>
            <Availability roomsOn={props.roomsOn} rooms={props.rooms} loading={props.roomsLoading} onSelect={props.onSelect}/>
          </Grid> : <Grid></Grid>;
  
  return <Grid container>
           <Grid item xs={12} className={props.roomsOn? classes.accommodation : classes.roomsEmpty}>
            <Accommodation accommodation={props.accommodation} loading={props.accommodationLoading}/>
          </Grid>
          {roomsOff}
        </Grid>;
}

export default Detail;