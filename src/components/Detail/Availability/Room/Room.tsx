import React, {SFC} from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Pricing, { Rate } from './Pricing/Pricing';
import Description from '../../../Description';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import RoomImages from './RoomImages';
import Amenities from '../../Amenities';

export interface RoomProps {
  room: RoomDetail;
  onSelect: (id:string) => void;
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
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.divider
    },
    pricing: {
      marginTop: 20
    }
  }),
);

const Room: SFC<RoomProps> = props => {

  const classes = useStyles();

  const pricing = props.room.pricing.map((rate, index) => <Box className={classes.pricing}><Pricing rate={rate} onSelect={props.onSelect} key={index}/></Box>);
  
  return <Grid container spacing={2}>
    <Grid item xs={12} className={classes.roomName}>
      <Typography variant="h1">{props.room.content.name}</Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <RoomImages images={props.room.content.images}/>
    </Grid>
    <Grid item xs={12} sm={6} md={8} lg={9}>
      <Description text={props.room.content.description}></Description>
    </Grid>
    <Grid item xs={12}>
      <Amenities amenities={props.room.content.amenities} title="Servicios"/>
    </Grid>
    <Grid item xs={12}>{pricing}</Grid>
  </Grid>;
}

export default Room;
