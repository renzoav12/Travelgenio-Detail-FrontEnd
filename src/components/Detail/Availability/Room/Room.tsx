import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Rate, { RateProps } from './Rate/Rate';
import './Room.scss';


export interface RoomProps {
  name: string;
  description: string;
  rates: Array<RateProps>;
}

const Room = (room: RoomProps) => {

  const description = room.description
    .split("\n")
    .map((paragraph, index) => <Typography paragraph={true} align="justify" key={index}>{paragraph}</Typography>);

  const rates = room.rates.map((rate, index) => <Rate {...rate} key={index}/>);
  
  return <Grid container item xs={12}>
    <Grid item xs={12} className="otravo-room-name">{room.name}</Grid>
    <Grid item xs={12} className="otravo-room-description">{description}</Grid>
    <Grid item xs={12}>{rates}</Grid>
  </Grid>;
}

export default Room;
