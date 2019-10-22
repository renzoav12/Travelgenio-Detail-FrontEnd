import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import './Amenities.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export interface Amenities {
  amenities: Array<AmenityProps>;
}

export interface AmenityProps {
  id: string;
  name: string;
}

const Amenities = (props: Amenities) => {
  const amenities = props.amenities.map(amenity => 
    <Grid item xs={12} sm={6} md={4} lg={3} key={amenity.id}><LocationOnIcon/> {amenity.name}</Grid>);    
    
  return <Grid container item justify="flex-start" spacing={2}>
      <Grid item xs={12} className="otravo-title">Servicios más populares</Grid>
      {amenities}
    </Grid>;
}

export default Amenities;
