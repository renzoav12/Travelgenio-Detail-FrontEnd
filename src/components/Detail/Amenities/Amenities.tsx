import React, {FunctionComponent} from 'react';
import { Grid, Typography } from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface Amenities {
  amenities: Array<AmenityProps>;
  title: string;
  loading: boolean;
}

export interface AmenityProps {
  id: string;
  name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skeleton: {
      '& span': {
        marginTop: 10
      }
    }
  }),
);

const Amenities: FunctionComponent<Amenities> = props => {
  const classes = useStyles();

  const amenities = props.amenities.map(amenity => 
    <Grid item xs={12} sm={6} md={4} lg={3} key={amenity.id}>{amenity.name}</Grid>);    

  return <Grid container justify="flex-start" spacing={2}>
      <Grid item xs={12}><Typography variant="h1">{props.title}</Typography></Grid>
      {props.loading ? <Grid item xs={12} className = {classes.skeleton}><Skeleton height={30} count={3}/></Grid> : amenities}
    </Grid>;
}

export default Amenities;
