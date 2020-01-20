import React, {FunctionComponent} from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Description from '../../../Description/Description';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Skeleton from 'react-loading-skeleton';

export interface CheckInOutLoadingProps {
  checkInOut: CheckInOutProps;
  loading: boolean;
}

export interface CheckInOutProps {
  checkIn: CheckInProps;
  checkOut: CheckOutProps;
  instructions: string;
}

export interface CheckInProps {
  beginTime: string;
  endTime: string;
}

export interface CheckOutProps {
  time: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkIn: {
      fontWeight: "bold"
    },
    checkOut: {
      fontWeight: "bold"
    }, 
    skeleton: {
      '& span': {
        marginTop: 10
      }
    }
  }),
);

const CheckInCheckOut: FunctionComponent<CheckInOutLoadingProps> = props => {
  const begin24Hours = "00:00";
  const end24Hours = "23:59";
  const noneCheckinHour = "El alojamiento no informa sobre hora de checkin.";
  const noneCheckoutHour = "El alojamiento no informa sobre hora de checkout.";

  const classes = useStyles();

  const checkInHour = () => {
    if(props.checkInOut.checkIn.beginTime == begin24Hours && props.checkInOut.checkIn.endTime == end24Hours) {
      return <Box> Las 24 Hs.</Box>;  
    } else if(props.checkInOut.checkIn.beginTime && props.checkInOut.checkIn.endTime && props.checkInOut.checkIn.beginTime != props.checkInOut.checkIn.endTime) {
      return <Box>A partir de {props.checkInOut.checkIn.beginTime} Hs. a {props.checkInOut.checkIn.endTime} Hs.</Box>;
    } else if(props.checkInOut.checkIn.beginTime) {
      return <Box>A partir de {props.checkInOut.checkIn.beginTime} Hs.</Box>
    } else if(props.checkInOut.checkIn.endTime) {
      return <Box>Hasta las {props.checkInOut.checkIn.endTime} Hs.</Box>
    } else {
      return <Box>{noneCheckinHour}</Box>;
    }
  }
  
  const checkOutHour = () => {
    let checkoutTime = props.checkInOut.checkOut && props.checkInOut.checkOut.time ? `Hasta las ${props.checkInOut.checkOut.time} Hs.` : noneCheckoutHour;
    return <Box>{checkoutTime}</Box>;
  }

  return <Grid container item spacing={2} alignItems="flex-start">
    <Grid item xs={12} className="otravo-title">
      <Typography variant="h1">Condiciones del alojamiento</Typography>
    </Grid>
    <Grid item xs={3} md={2} lg={1} className={classes.checkIn}>
      Check In:
    </Grid>
    <Grid item xs={9} md={10} lg={11}>
      {props.loading ? <Skeleton height={20}/> : checkInHour()}
    </Grid>
    <Grid item xs={3} md={2} lg={1} className={classes.checkOut}>
      Check Out:
    </Grid>
    <Grid item xs={9} md={10} lg={11}>
      {props.loading ? <Skeleton height={20}/> : checkOutHour()}
    </Grid>
    <Grid item xs={12}>
      {props.loading ? <Box className={classes.skeleton}><Skeleton height={20} count={3}/></Box> : <Description text={props.checkInOut.instructions}/>}
    </Grid>
  </Grid>;
}

export default CheckInCheckOut;
