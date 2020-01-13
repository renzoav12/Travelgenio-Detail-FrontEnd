import React, {FunctionComponent} from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Pricing, { Rate } from './Pricing/Pricing';
import Description from '../../../Description/Description';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import RoomImages from './RoomImages/RoomImages';
import Amenities from '../../Amenities/Amenities';
import Skeleton from 'react-loading-skeleton';
import loadingImage from '../../../../assets/images/loadingHotel.jpg'

export interface RoomProps {
  room?: RoomDetail;
  onSelect?: (id:string) => void;
  loading?: boolean;
}

export interface RoomDetail {
  content: RoomContent;
  pricing: Array<Rate>;
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    roomName: {
      marginTop: 20,
      marginBottom: 15,
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.divider
    },
    pricing: {
      marginTop: 20
    },
    amenities: {
      marginTop: 20
    },
    skeletonDescription: {
      '& span': {
        marginBottom: 15
      }
    },
    skeletonPrices: {
      '& span': {
        marginTop: 20
      }
    }
  }),
);

const Room: FunctionComponent<RoomProps> = props => {

  const classes = useStyles();

  const pricing = props.room 
    ? props.room.pricing.map((rate, index) => <Box className={classes.pricing} key={index}><Pricing rate={rate} onSelect={props.onSelect ? props.onSelect : (id: string)=>{}}/></Box>)
    : <Box className={classes.skeletonPrices}><Skeleton height={120} count={2}/></Box>;
  
  return <Grid container spacing={2}>
    <Grid item xs={12} className={classes.roomName}>
      {props.room 
        ? <Typography variant="h1">{props.room.content.name}</Typography>
        : <Skeleton height={30}/>}
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <RoomImages images={props.room ? props.room.content.images : [{url:loadingImage}]}/>
    </Grid>
    <Grid item xs={12} sm={6} md={8} lg={9}>
    {props.room 
        ? <Description text={props.room.content.description}/>
        : <Box className={classes.skeletonDescription}><Skeleton height={30} count={8}/></Box>}
    </Grid>
    {(props.room && props.room.content.amenities.length > 0) ?
    <Grid item xs={12} className={classes.amenities}>
      <Amenities amenities={props.room.content.amenities} loading={props.loading ? props.loading : true} title="Servicios"/>
    </Grid>
    : null}
    <Grid item xs={12}>{pricing}</Grid>
  </Grid>;
}

export default Room;
