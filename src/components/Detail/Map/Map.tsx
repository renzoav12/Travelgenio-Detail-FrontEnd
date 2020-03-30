import React, {FunctionComponent} from 'react';
import { Paper } from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import LocationMap from '../Accommodation/Location/LocationMap/LocationMap';
import { AccommodationProps } from '../Accommodation/Accommodation';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Status } from '../../../model/search';

export interface Props {
  accommodation: AccommodationProps;
  status: Status;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    map: {
      height: '70vh',
      maxHeight: 500
    }
  }),
);

const Map: FunctionComponent<Props> = props => {
  const classes = useStyles();

  return <Paper className={classes.map}>
      {props.status === Status.LOADING 
      ? <Skeleton height={"100%"}/> 
      : <LocationMap location={props.accommodation.location} zoom={16}/>}
  </Paper>;
}

export default Map;
