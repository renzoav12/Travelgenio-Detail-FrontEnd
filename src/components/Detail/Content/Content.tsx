import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import './Content.scss';
import Header from './Header';
import Images from './Images';
import Amenities from './Amenities';
import { LocationProps } from './Location/Location';
import { AmenityProps } from './Amenities/Amenities';
import { CategoryProps } from './Header/Header';
import { ImageProps } from './Images/Images';
import CheckInCheckOut from './CheckInCheckOut';


export interface ContentProps {
  name: string;
  category: CategoryProps;
  location: LocationProps;
  description: string;
  amenities: Array<AmenityProps>;
  images: Array<ImageProps>;
  checkIn: string;
  checkOut: string;
  checkInInstructions: Array<string>;
}

const Content = (content: ContentProps) => {

  const description = content.description
    .split("\n")
    .map((paragraph, index) => <Typography paragraph={true} align="justify" key={index}>{paragraph}</Typography>);

  return <Grid container item spacing={2} xs={12}>
    <Grid container item xs={12} className="otravo-content-section"><Header {...content}/></Grid>
    <Grid item xs={12} className="otravo-content-section"><Images {...content}/></Grid>
    <Grid item container spacing={2} xs={12} className="otravo-content-section">
      <Grid item xs={12} className="otravo-title">Información</Grid>
      <Grid item xs={12}>{description}</Grid>
    </Grid>
    <Grid container item xs={12} className="otravo-content-section otravo-content-section-border">
      <Amenities amenities={content.amenities}/>
    </Grid>
    <Grid container item xs={12} className="otravo-content-section otravo-content-section-border">
      <CheckInCheckOut {...content}/>
    </Grid>
  </Grid>;
}

export default Content;
