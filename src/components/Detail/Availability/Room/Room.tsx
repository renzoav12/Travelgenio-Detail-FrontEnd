import React, { FunctionComponent } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Pricing, { Rate } from './Pricing/Pricing';
import Description from '../../../Description/Description';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Amenities from '../../Amenities/Amenities';
import Skeleton from 'react-loading-skeleton';
import Gallery from '../../../Gallery/Gallery';
import { SearchBoxOccupancyState } from '@hotels/search-box';
import { Status } from '../../../../model/search';

export interface RoomProps {
  room?: RoomDetail;
  occupancy: SearchBoxOccupancyState;
  onSelect?: (id: string) => void;
  status?: Status;
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
  bedGroup: BedGroup;
  images: Array<Image>;
  surfaceArea: SurfaceArea;
}

export interface Amenity {
  id: string;
  name: string;
}

export interface BedGroup {
  description: string;
  beds: Array<Bed>;
}

export interface Bed {
  name: string;
  type: string;
  quantity: number;
}

export interface SurfaceArea {
  value: string;
  unit: string;
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
    images: {
      height: 350
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

  const pricing = props.room ? props.room.pricing.map((rate, index) => {
    const bedGroup = props.room ? props.room.content.bedGroup : { description: "", beds: [] };
    return <Box className={classes.pricing} key={index}><Pricing rate={rate} occupancy={props.occupancy} bedGroup={bedGroup} onSelect={props.onSelect ? props.onSelect : (id: string) => { }} /></Box>;
  })
    : <Box className={classes.skeletonPrices}><Skeleton height={120} count={2} /></Box>;

  return (
    props.status === Status.LOADING || props.room ?
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.roomName}>
          {props.room
            ? <Typography variant="h1">{props.room.content.name}</Typography>
            : <Skeleton height={30} />}
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={4} className={classes.images}>
          <Gallery images={props.room ? props.room.content.images : []} loading={props.status !== undefined ? props.status : Status.LOADING} />
        </Grid>
        <Grid item xs={12} sm={6} md={7} lg={8}>
          {props.room
            ? <Description text={props.room.content.description} />
            : <Box className={classes.skeletonDescription}><Skeleton height={30} count={8} /></Box>}
        </Grid>
        {(props.room && props.room.content.amenities.length > 0) ?
          <Grid item xs={12} className={classes.amenities}>
            <Amenities amenities={props.room.content.amenities} status={props.status ? props.status : Status.LOADING} title="Servicios" />
          </Grid>
          : null}
        <Grid item xs={12}>{pricing}</Grid>
      </Grid>
      : null);
}

export default Room;
