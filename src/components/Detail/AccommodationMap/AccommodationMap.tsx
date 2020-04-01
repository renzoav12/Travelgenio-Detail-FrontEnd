import React, {FunctionComponent} from 'react';
import { Paper } from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import Map, { Place } from '@hotels/map';
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

const AccommodationMap: FunctionComponent<Props> = props => {
  const classes = useStyles();

  const street = props.accommodation.location.address.street.name + " " + props.accommodation.location.address.street.number;
  const city = (street.length > 1 ? ", ": "") + props.accommodation.location.address.city.name;
  const place: Place = {title : street+" "+city, geoPosition: props.accommodation.location.geoPosition};

  return <Paper className={classes.map}>
      {props.status === Status.LOADING 
      ? <Skeleton height={"100%"}/> 
      : <Map {...{places: [place], zoom: 16}}/>}
  </Paper>;
}

export default AccommodationMap;