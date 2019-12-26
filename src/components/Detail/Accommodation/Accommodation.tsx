import React, {SFC} from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Images from './Images';
import Amenities from '../Amenities';
import { AmenityProps } from '../Amenities/Amenities';
import { ImageProps } from './Images/Images';
import CheckInOut from './CheckInOut';
import Category from '../../Category';
import Location, { LocationProps } from './Location/Location';
import { CheckInOutProps } from './CheckInOut/CheckInOut';
import Description from '../../Description';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

export interface Props {
  accommodation: AccommodationProps;
  loading: boolean;
}

export interface AccommodationProps {
  name: string;
  category: CategoryProps;
  location: LocationProps;
  description: string;
  amenities: Array<AmenityProps>;
  images: Array<ImageProps>;
  checkInOut: CheckInOutProps;
}

export interface CategoryProps {
  id: string;
  code: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      marginTop: 20
    },
    sectionBorder: {
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: theme.palette.divider
    }
  }),
);

const Accommodation: SFC<Props> = props => {
  const classes = useStyles();
  return <Paper>
    <Grid container spacing={2}>
      {props.loading ? 
      <Grid item xs={12}><LinearProgress></LinearProgress></Grid> 
      :
      <Grid container item xs={12} alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h1">{props.accommodation.name}</Typography>
        </Grid>
        <Grid item>
          <Category stars={parseInt(props.accommodation.category.code)}/>
        </Grid>
      </Grid>}
      {!props.loading &&
      <Grid item xs={12}>
        <Location location = {props.accommodation.location}/>
      </Grid>}
      <Grid item xs={12}>
        <Images {...props.accommodation}/>
      </Grid>
      {props.loading ? 
      <Grid item xs={12}><LinearProgress></LinearProgress></Grid> 
      :
      <Grid item container xs={12}  spacing={2}>
        <Grid item xs={12}>
        <Typography variant="h1">Información</Typography>
        </Grid>
        <Grid item xs={12}>
          <Description text={props.accommodation.description}/>
        </Grid>
      </Grid>}
      {!props.loading && <Grid item xs={12} className={classes.sectionBorder}>
        <Amenities amenities={props.accommodation.amenities} title="Servicios más populares"/>
      </Grid>}
      {!props.loading && <Grid item xs={12} className={classes.sectionBorder}>
        <CheckInOut {...props.accommodation.checkInOut}/>
      </Grid>}
    </Grid>
  </Paper>;
}

export default Accommodation;
