import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Header from './Header';
import Images from './Images';
import Amenities from './Amenities';
import { LocationProps } from './Location/Location';
import { AmenityProps } from './Amenities/Amenities';
import { CategoryProps } from './Header/Header';
import { ImageProps } from './Images/Images';
import CheckInOut from './CheckInOut';

import './Accommodation.scss';
import { CheckInOutProps } from './CheckInOut/CheckInOut';

export interface AccommodationProps {
  name: string;
  category: CategoryProps;
  location: LocationProps;
  description: string;
  amenities: Array<AmenityProps>;
  images: Array<ImageProps>;
  checkInOut: CheckInOutProps;
}

const Accommodation = (accommodation: AccommodationProps) => {

/*   const description = accommodation.description
    .split("\n")
    .map((paragraph, index) => <Typography paragraph={true} align="justify" key={index}>{paragraph}</Typography>); */

  return <Grid container item spacing={2} xs={12}>
    <Grid container item xs={12} className="otravo-content-section"><Header {...accommodation}/></Grid>
    <Grid item xs={12} className="otravo-content-section"><Images {...accommodation}/></Grid>
    <Grid item container spacing={2} xs={12} className="otravo-content-section">
      <Grid item xs={12} className="otravo-title">Información</Grid>
      <Grid item xs={12}>{accommodation.description}</Grid>
    </Grid>
    <Grid container item xs={12} className="otravo-content-section otravo-content-section-border">
      <Amenities amenities={accommodation.amenities}/>
    </Grid>
    <Grid container item xs={12} className="otravo-content-section otravo-content-section-border">
      <CheckInOut {...accommodation.checkInOut}/>
    </Grid>
  </Grid>;
}

export default Accommodation;
