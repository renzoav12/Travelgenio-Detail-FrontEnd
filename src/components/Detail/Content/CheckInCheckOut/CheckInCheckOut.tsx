import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import './CheckInCheckOut.scss';
import { typography } from '@material-ui/system';

export interface CheckInCheckOutProps {
  checkIn: string;
  checkOut: string;
  checkInInstructions: Array<string>;
}
const CheckInCheckOut = (checkInCheckOutProps: CheckInCheckOutProps) => {

  const instructions = checkInCheckOutProps.checkInInstructions
    .map((instruction, index) => <Typography key={index}>{instruction}</Typography>);

  return <Grid container item spacing={2} alignItems="flex-start">
    <Grid item xs={12} className="otravo-title">Condiciones</Grid>
    <Grid item xs={3} md={2} lg={1} xl={1} className="otravo-check-in">
      Check In:
    </Grid>
    <Grid item xs={9} md={4} lg={3} xl={2}>
      A partir de las {checkInCheckOutProps.checkIn} Hs.
    </Grid>
    <Grid item xs={3} md={2} lg={1} xl={1} className="otravo-check-out">
      Check Out:
    </Grid>
    <Grid item xs={9} md={4} lg={3} xl={2}>
      Hasta las {checkInCheckOutProps.checkOut} Hs.
    </Grid>
    <Grid item xs={12}>
      {instructions}
    </Grid>
  </Grid>;
}

export default CheckInCheckOut;
