import React, {FunctionComponent} from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Description from '../../../Description/Description';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Skeleton from 'react-loading-skeleton';
import { Status } from '../../../../model/search';
import Keys from "@hotels/translation-keys";
import Translation from "@hotels/translation";


export interface CheckInOutLoadingProps {
  checkInOut: CheckInOutProps;
  status: Status;
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

const CheckInCheckOut: FunctionComponent<CheckInOutLoadingProps> = (props) => {
  const begin24Hours = "00:00";
  const end24Hours = "23:59";
  const noneCheckinHour = <Translation tkey={Keys.common.accommodation_not_check_in}/>;
  const noneCheckoutHour = <Translation tkey={Keys.common.accommodation_not_check_out}/>;

  const classes = useStyles();

  const checkInHour = () => {
    if(props.checkInOut.checkIn.beginTime === begin24Hours && props.checkInOut.checkIn.endTime === end24Hours) {
    return <Box><Translation tkey={Keys.common.accommodation_check_in_24hs}/></Box>;  
    } else if(props.checkInOut.checkIn.beginTime && props.checkInOut.checkIn.endTime && props.checkInOut.checkIn.beginTime !== props.checkInOut.checkIn.endTime) {
      return <Box>
            <Translation tkey={Keys.common.accommodation_check_in_from_to} values={{n:props.checkInOut.checkIn.beginTime ,m:props.checkInOut.checkIn.endTime}}/>
            </Box>;
    } else if(props.checkInOut.checkIn.beginTime) {
      return <Box><Translation tkey={Keys.common.accommodation_check_in_from} values={{n:props.checkInOut.checkIn.beginTime}}/></Box>
    } else if(props.checkInOut.checkIn.endTime) {
    return <Box><Translation tkey={Keys.common.accommodation_check_in_until} values={{n:props.checkInOut.checkIn.endTime}}/> </Box>
    } else {
      return <Box>{noneCheckinHour}</Box>;
    }
  }
  
  const checkOutHour = () => {
    let checkoutTime = props.checkInOut.checkOut && props.checkInOut.checkOut.time ?
                      <Translation tkey={Keys.common.accommodation_check_in_until} values={{n:props.checkInOut.checkOut.time}}/>
                       : noneCheckoutHour;
    return <Box>{checkoutTime}</Box>;
  }

  return <Grid container item spacing={2} alignItems="flex-start">
    <Grid item xs={12} className="otravo-title">
<Typography variant="h1"><Translation tkey={Keys.detail.accommodation_check_in_out_conditions}/></Typography>
    </Grid>
    <Grid item xs={3} md={2} lg={1} className={classes.checkIn}>
      <Translation tkey={Keys.common.accommodation_check_in}/>
    </Grid>
    <Grid item xs={9} md={10} lg={11}>
      {props.status === Status.LOADING ? <Skeleton height={20}/> : checkInHour()}
    </Grid>
    <Grid item xs={3} md={2} lg={1} className={classes.checkOut}>
      <Translation tkey={Keys.common.accommodation_check_out}/>
    </Grid>
    <Grid item xs={9} md={10} lg={11}>
      {props.status === Status.LOADING ? <Skeleton height={20}/> : checkOutHour()}
    </Grid>
    <Grid item xs={12}>
      {props.status === Status.LOADING ? <Box className={classes.skeleton}><Skeleton height={20} count={3}/></Box> : <Description text={props.checkInOut.instructions}/>}
    </Grid>
  </Grid>;
}


export default CheckInCheckOut;
