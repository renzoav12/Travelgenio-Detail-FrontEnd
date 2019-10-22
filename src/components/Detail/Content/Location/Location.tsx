import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import './Location.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export interface Location {
  location: LocationProps;
}
export interface LocationProps {
  address: AddressProps;
  geoPosition: GeoPositionProps;
}

export interface AddressProps {
  street: string;
  streetNumber: string;
  city: string;
  state: string;
  country: string;
}

export interface GeoPositionProps {
  latitude: number;
  longitude: number;
}

const Location = (props: Location) => {
    return <Grid item xs={12}>
        <LocationOnIcon fontSize="small"/> {props.location.address.street} {props.location.address.streetNumber}, {props.location.address.city}
      </Grid>;
}

export default Location;
