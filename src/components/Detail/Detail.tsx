import React, {FunctionComponent} from 'react';
import { Grid } from '@material-ui/core';
import Accommodation, { AccommodationProps } from './Accommodation/Accommodation';
import Map from './Map/Map';
import Availability from './Availability/Availability';
import { RoomDetail } from './Availability/Room/Room';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SearchBoxOccupancyState } from '@hotels/search-box';

export interface DetailProps {
  accommodation: AccommodationProps;
  rooms: Array<RoomDetail>;
  occupancy: SearchBoxOccupancyState;
  accommodationStatus: string;
  roomsStatus: string;
  onSelect: (id: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accommodation: {
      marginTop: 20
    },
    map: {
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

  const availability = props.roomsStatus !== 'empty' ?
    <Grid item xs={12} className={classes.availabilities}>
      <Availability rooms={props.rooms} occupancy={props.occupancy} loading={props.roomsStatus} onSelect={props.onSelect} />
    </Grid> : null;

  return <Grid container>

           <Grid item xs={12} className={classes.accommodation}>
            <Accommodation accommodation={props.accommodation} loading={props.accommodationStatus}/>
          </Grid>
          <Grid item xs={12} className={classes.map}>
            <Map accommodation={props.accommodation} loading={props.accommodationStatus}/>
          </Grid>
          {availability}
        </Grid>;
}

export default Detail;