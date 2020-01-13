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

  const classes = useStyles();

  const checkInEndTime =props.checkInOut.checkIn.endTime
    && props.checkInOut.checkIn.endTime !== props.checkInOut.checkIn.beginTime  
    ? `a ${props.checkInOut.checkIn.endTime} Hs.` : "";

  const checkInHour = () => <div> {props.checkInOut.checkIn.beginTime ? `A partir de ${props.checkInOut.checkIn.beginTime} Hs.` : ""} {checkInEndTime}</div>;
  const checkOutHour = () => <div> {props.checkInOut.checkOut.time ? `Hasta las ${props.checkInOut.checkOut.time} Hs.` : ""}</div>;

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
