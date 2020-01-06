import React, {SFC} from 'react';
import { Grid, Typography } from '@material-ui/core';
import Description from '../../../Description';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    CheckIn: {
      fontWeight: "bold"
    },
    CheckOut: {
      fontWeight: "bold"
    }
  }),
);

const CheckInCheckOut: SFC<CheckInOutProps> = props => {

  const classes = useStyles();

  const checkInEndTime =props.checkIn.endTime
    && props.checkIn.endTime !== props.checkIn.beginTime  
    ? `a ${props.checkIn.endTime} Hs.` : "";

  const checkInHour = <div> A partir de {props.checkIn.beginTime} Hs. {checkInEndTime}</div>;

  return <Grid container item spacing={2} alignItems="flex-start">
    <Grid item xs={12} className="otravo-title">
      <Typography variant="h1">Condiciones del alojamiento</Typography>
    </Grid>
    <Grid item xs={3} md={2} lg={1} className={classes.CheckIn}>
      Check In:
    </Grid>
    <Grid item xs={9} md={10} lg={11}>
      {checkInHour}
    </Grid>
    <Grid item xs={3} md={2} lg={1} className={classes.CheckOut}>
      Check Out:
    </Grid>
    <Grid item xs={9} md={10} lg={11}>
      Hasta las {props.checkOut.time} Hs.
    </Grid>
    <Grid item xs={12}>
      <Description text={props.instructions}/>
    </Grid>
  </Grid>;
}

export default CheckInCheckOut;
