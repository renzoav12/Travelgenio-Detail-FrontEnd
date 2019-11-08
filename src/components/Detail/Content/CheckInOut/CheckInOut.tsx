import React from 'react';
import { Grid } from '@material-ui/core';
import './CheckInOut.scss';
import Description from '../../../Description';

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

  const instructions = <Description text={checkInOutProps.instructions}/>;

  const checkInEndTime =checkInOutProps.checkIn.endTime
    && checkInOutProps.checkIn.endTime !== checkInOutProps.checkIn.beginTime  
    ? `a ${checkInOutProps.checkIn.endTime} Hs.` : "";

  const checkInHour = <div> A partir de {checkInOutProps.checkIn.beginTime} Hs. {checkInEndTime}</div>;

  return <Grid container item spacing={2} alignItems="flex-start">
    <Grid item xs={12} className="otravo-title">Condiciones</Grid>
    <Grid item xs={3} md={2} lg={1}className="otravo-check-in">
      Check In:
    </Grid>
    <Grid item xs={9} md={10} lg={11}>
      {checkInHour}
    </Grid>
    <Grid item xs={3} md={2} lg={1} className="otravo-check-out">
      Check Out:
    </Grid>
    <Grid item xs={9} md={10} lg={11}>
      Hasta las {checkInOutProps.checkOut.time} Hs.
    </Grid>
    <Grid item xs={12}>
      {instructions}
    </Grid>
  </Grid>;
}

export default CheckInCheckOut;
