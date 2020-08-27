import React, {FunctionComponent} from 'react';
import { Typography, Box } from '@material-ui/core';
import Description from '../../../Description/Description';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Skeleton from 'react-loading-skeleton';
import { Status } from '../../../../model/search';
import Keys from "@hotels/translation-keys";
import Translation from "@hotels/translation";


export interface CheckInOutLoadingProps {
  checkInOut: CheckInOutProps;
  status: Status;
  locale: string;
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
    container: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
    title: {
      marginBottom: "20px",
    },
    checkContainer: {
      display: "flex",
      marginBottom: "20px",
    },
    checkTitle: {
      fontWeight: "bold",
      marginRight: "10px",
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

  const checkInAllows = props.locale.includes("en") || props.locale.includes("es");

  const checkInHour = () => {
    if(props.checkInOut.checkIn.beginTime === begin24Hours && props.checkInOut.checkIn.endTime === end24Hours) {
    return <Box><Translation tkey={Keys.common.accommodation_check_in_24hs}/></Box>;  
    } else if(props.checkInOut.checkIn.beginTime && props.checkInOut.checkIn.endTime && props.checkInOut.checkIn.beginTime !== props.checkInOut.checkIn.endTime) {
      return <Box>
            <Translation tkey={Keys.common.accommodation_check_in_from_to} values={{n:props.checkInOut.checkIn.beginTime ,m:props.checkInOut.checkIn.endTime}}/>
            </Box>;
    } else if(props.checkInOut.checkIn.beginTime) {
    return <Box> {checkInAllows ? <Translation tkey={Keys.common.accommodation_check_in_from} values={{n:props.checkInOut.checkIn.beginTime}}/> : props.checkInOut.checkIn.beginTime}</Box>
    } else if(props.checkInOut.checkIn.endTime) {
    return <Box> {checkInAllows ? <Translation tkey={Keys.common.accommodation_check_in_until} values={{n:props.checkInOut.checkIn.endTime}}/>: null}</Box>
    } else {
      return <Box>{noneCheckinHour}</Box>;
    }
  }
  
  const checkOutHour = () => {
    if (checkInAllows){
        let checkoutTime = props.checkInOut.checkOut && props.checkInOut.checkOut.time ? 
        <Translation tkey={Keys.common.accommodation_check_in_until} values={{n:props.checkInOut.checkOut.time}}/>
                          : noneCheckoutHour;
        return <Box>{checkoutTime}</Box>;
    }
    return <Box>{props.checkInOut.checkOut.time}</Box>;
  }

  return<Box className={classes.container}>
      <Box className={classes.title}>
        <Typography variant="h1"><Translation tkey={Keys.detail.accommodation_check_in_out_conditions}/></Typography>
      </Box>
      <Box className={classes.checkContainer}>
        <Box className={classes.checkTitle}>
          <Translation tkey={Keys.detail.accommodation_check_in_hour}/>:  
        </Box>
        <Box>
          {props.status === Status.LOADING ? <Skeleton height={20}/> : checkInHour()}
        </Box>
      </Box>
      <Box className={classes.checkContainer}>
        <Box className={classes.checkTitle}>
          <Translation tkey={Keys.detail.accommodation_check_out_hour}/>:  
        </Box>
        <Box>
          {props.status === Status.LOADING ? <Skeleton height={20}/> : checkOutHour()}
        </Box>
      </Box>
      <Box>
        {props.status === Status.LOADING ? <Box className={classes.skeleton}><Skeleton height={20} count={3}/></Box> : <Description text={props.checkInOut.instructions}/>}
      </Box>
    </Box>
}


export default CheckInCheckOut;
