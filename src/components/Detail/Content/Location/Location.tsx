import React from 'react';
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
  readonly country: CountryProps;
  readonly state: StateProps;
  readonly city: CityProps;
  readonly street: StreetProps;
  readonly zipCode: string;
}

export interface CountryProps {
  readonly name: string;
}

export interface StateProps {
  readonly name: string;
}

export interface CityProps {
  readonly name: string;
}

export interface StreetProps {
  readonly name: string;
  readonly number: string;
}

export interface GeoPositionProps {
  latitude: number;
  longitude: number;
}

const Location = (props: Location) => {
    const street = props.location.address.street.name + " " + props.location.address.street.number;
    const city = (street.length > 1 ? ", ": "") + props.location.address.city.name;

    return <Grid item xs={12}>
        <LocationOnIcon fontSize="small"/> {street} {city}
      </Grid>;
}

export default Location;
