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

const Accommodation: SFC<AccommodationProps> = props => {

  const classes = useStyles();

  return <Paper>
    <Grid container spacing={2}>
      <Grid container item xs={12} alignItems="flex-start" spacing={2}>
        <Grid item>
          <Typography variant="h1">{props.name}</Typography>
        </Grid>
        <Grid item>
          <Category stars={parseInt(props.category.code)}/>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Location location = {props.location}/>
      </Grid>      
      <Grid item xs={12}>
        <Images {...props}/>
      </Grid>
      <Grid item container xs={12}  spacing={2}>
        <Grid item xs={12}>
        <Typography variant="h1">Información</Typography>
        </Grid>
        <Grid item xs={12}>
          <Description text={props.description}/>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.sectionBorder}>
        <Amenities amenities={props.amenities} title="Servicios más populares"/>
      </Grid>
      <Grid item xs={12} className={classes.sectionBorder}>
        <CheckInOut {...props.checkInOut}/>
      </Grid>
    </Grid>
  </Paper>;
}

export default Accommodation;
