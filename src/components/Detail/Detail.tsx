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
  onSelect: (id: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accommodation: {
      marginTop: 20
    },
    availabilities: {
      marginTop: 20,
      marginBottom: 20
    }
  }),
);

const Detail: FunctionComponent<DetailProps> = props => {

  const classes = useStyles();

  return <Grid container>
           <Grid item xs={12} className={classes.accommodation}>
            <Accommodation accommodation={props.accommodation} loading={props.accommodationLoading}/>
          </Grid>
          <Grid item xs={12} className={classes.availabilities}>
            <Availability rooms={props.rooms} loading={props.roomsLoading} onSelect={props.onSelect}/>
          </Grid>
        </Grid>;
}

export default Detail;