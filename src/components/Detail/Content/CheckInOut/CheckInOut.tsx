import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { typography } from '@material-ui/system';
import './CheckInOut.scss';

export interface CheckInOutProps {
  readonly checkIn: CheckInProps;
  readonly checkOut: CheckOutProps;
  readonly instructions: string;
}

export interface CheckInProps {
  readonly beginTime: string;
  readonly endTime: string;
}

export interface CheckOutProps {
  readonly time: string;
}
const CheckInCheckOut = (checkInOutProps: CheckInOutProps) => {

/*   const instructions = checkInOutProps.instructions
    .map((instruction, index) => <Typography key={index}>{instruction}</Typography>); */

  return <Grid container item spacing={2} alignItems="flex-start">
    <Grid item xs={12} className="otravo-title">Condiciones</Grid>
    <Grid item xs={3} md={2} lg={1} xl={1} className="otravo-check-in">
      Check In:
    </Grid>
    <Grid item xs={9} md={4} lg={3} xl={2}>
      A partir de las {checkInOutProps.checkIn.beginTime} Hs.
    </Grid>
    <Grid item xs={3} md={2} lg={1} xl={1} className="otravo-check-out">
      Check Out:
    </Grid>
    <Grid item xs={9} md={4} lg={3} xl={2}>
      Hasta las {checkInOutProps.checkOut.time} Hs.
    </Grid>
    <Grid item xs={12}>
      {checkInOutProps.instructions}
    </Grid>
  </Grid>;
}

export default CheckInCheckOut;
