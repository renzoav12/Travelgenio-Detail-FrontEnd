import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Pricing, { PricingProps } from './Pricing/Pricing';
import './Room.scss';


export interface RoomProps {
  content: RoomContent;
  pricing: Array<PricingProps>;
}

export interface RoomContent {
  id: string;
  name: string;
  description: string;
  amenities: Array<Amenity>;
  beds: Array<Bed>;
  images: Array<Image>;
}

export interface Amenity {
  id: string;
  name: string;
}

export interface Bed {
  name: string;
  quantity: number;
}

export interface Image {
  url: string;
}


const Room = (room: RoomProps) => {

  const description = room.content.description
    .split("\n")
    .map((paragraph, index) => <Typography paragraph={true} align="justify" key={index}>{paragraph}</Typography>);

  const pricing = room.pricing.map((pricing, index) => <Pricing {...pricing} key={index}/>);
  
  return <Grid container item xs={12}>
    <Grid item xs={12} className="otravo-room-name">{room.content.name}</Grid>
    <Grid item xs={12} className="otravo-room-description">{description}</Grid>
    <Grid item xs={12}>{pricing}</Grid>
  </Grid>;
}

export default Room;
