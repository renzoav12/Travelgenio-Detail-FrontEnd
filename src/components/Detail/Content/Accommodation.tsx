import React from 'react';
import { Grid } from '@material-ui/core';
import Images from './Images';
import Amenities from './Amenities';
import { AmenityProps } from './Amenities/Amenities';
import { ImageProps } from './Images/Images';
import CheckInOut from './CheckInOut';
import Category from '../../Category';
import Location, { LocationProps } from './Location/Location';
import { CheckInOutProps } from './CheckInOut/CheckInOut';
import Description from '../../Description';

import './Accommodation.scss';

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

const Accommodation = (accommodation: AccommodationProps) => {

  const description = <Description text={accommodation.description}/>;

  return <Grid container item xs={12}>
    <Grid container item xs={12} alignItems="flex-start">
      <div className="otravo-title otravo-accommodation-name">{accommodation.name}</div>
      <Category stars={parseInt(accommodation.category.code)}/>
    </Grid>
    <Grid item xs={12}>
      <Location location = {accommodation.location}/>
    </Grid>      
    <Grid item xs={12} className="otravo-content-section">
      <Images {...accommodation}/>
    </Grid>
    <Grid item container spacing={2} xs={12} className="otravo-content-section">
      <Grid item xs={12} className="otravo-title">Información</Grid>
      <Grid item xs={12}>{description}</Grid>
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
