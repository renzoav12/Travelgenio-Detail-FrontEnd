import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Map as MapLeaflet, TileLayer, Marker, Popup } from 'react-leaflet';

export interface MapProps {
  places: Array<Place>;
  zoom: number;
}

export interface Place {
  title: string;
  geoPosition: GeoPosition;
}

export interface GeoPosition {
  latitude: number;
  longitude: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    map: {
      width: "100%",
      minHeight: "100%"
    }
  }),
);

const Map: FunctionComponent<MapProps> = props => {
  const classes = useStyles();
  const firstPlace = props.places[0];

  return <MapLeaflet center={[firstPlace.geoPosition.latitude, firstPlace.geoPosition.longitude]} zoom={props.zoom} className={classes.map}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[firstPlace.geoPosition.latitude, firstPlace.geoPosition.longitude]}>
        <Popup>
          {firstPlace.title}
        </Popup>
      </Marker>
    </MapLeaflet>;
}

export default Map;
