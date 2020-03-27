import React, {FunctionComponent} from 'react';
import Map, { Place } from '@hotels/map';
import { LocationProps } from '../Location';

export interface LocationMapProps {
  location: LocationProps;
  zoom: number;
}

const LocationMap: FunctionComponent<LocationMapProps> = props => {
  const street = props.location.address.street.name + " " + props.location.address.street.number;
  const city = (street.length > 1 ? ", ": "") + props.location.address.city.name;
  const place: Place = {title : street+" "+city, geoPosition: props.location.geoPosition};

  return <Map {...{places: [place], zoom: props.zoom}}/>;
}

export default LocationMap;
