import React, {FunctionComponent} from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Images, { ImageProps } from './Images/Images';
import Amenities from '../Amenities/Amenities';
import { AmenityProps } from '../Amenities/Amenities';
import CheckInOut from './CheckInOut/CheckInOut';
import Category from '../../Category/Category';
import Location, { LocationProps } from './Location/Location';
import { CheckInOutProps } from './CheckInOut/CheckInOut';
import Description from '../../Description/Description';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Skeleton from 'react-loading-skeleton';
import { Status } from '../../../model/search';
import PropTypes from "prop-types";
import Keys from "@hotels/translation-keys";
import { capitalCase } from "change-case";




export interface Props {
  accommodation: AccommodationProps;
  accommodationStatus: Status;
}

export interface AccommodationProps {
  name: string;
  category: CategoryProps;
  location: LocationProps;
  description: string;
  amenities: Array<AmenityProps>;
  images: Array<ImageProps>;
  checkInOut: CheckInOutProps;
}

export interface CategoryProps {
  id: string;
  code: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      marginTop: 18,
      marginBottom: 18,
    },
    sectionBorder: {
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      borderTopColor: theme.palette.divider,
      paddingTop: "36px !important",
      paddingBottom: "36px !important",
    },
    skeleton: {
      '& span': {
        marginTop: 17
      }
    }
  }),
);

const Accommodation: FunctionComponent<Props> = (props, context) => {
  const classes = useStyles();
  console.log(context.t(Keys.detail.accommodation_information));
  return <Paper>
    <Grid container spacing={2}>
      {props.accommodationStatus === Status.LOADING ? <Grid item xs={12}><Skeleton height={30}/></Grid> :
      <Grid container item xs={12} alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h1">{props.accommodation.name}</Typography>
        </Grid>
        <Grid item>
          <Category stars={parseInt(props.accommodation.category.code)}/>
        </Grid>
      </Grid>}
      {props.accommodationStatus === Status.LOADING ? <Grid item xs={12}><Skeleton height={20}/></Grid> :
        <Grid item xs={12}>
          <Location location = {props.accommodation.location} accommodationName={props.accommodation.name}/>
        </Grid>}
      <Grid item xs={12}>
        <Images images={props.accommodation.images} loading={props.accommodationStatus}/>
      </Grid>
      <Grid item container xs={12} spacing={2} className={classes.section}>
        <Grid item xs={12}>
          <Typography variant="h1">{context.t(Keys.detail.accommodation_information)}</Typography>
        </Grid>
        {props.accommodationStatus === Status.LOADING ? <Grid item xs={12} className = {classes.skeleton}><Skeleton count={5} height={50}/></Grid> :
        <Grid item xs={12}>
          <Description text={props.accommodation.description}/>
        </Grid>}
      </Grid>
      <Grid item xs={12} className={classes.sectionBorder}>
        <Amenities amenities={props.accommodation.amenities} status={props.accommodationStatus} title={capitalCase(context.t(Keys.detail.accommodation_title))}/>
      </Grid>
      <Grid item xs={12} className={classes.sectionBorder}>
        <CheckInOut checkInOut={props.accommodation.checkInOut} status={props.accommodationStatus}/>
      </Grid>
    </Grid>
  </Paper>;
}

Accommodation.contextTypes = { t: PropTypes.func };

export default Accommodation;
