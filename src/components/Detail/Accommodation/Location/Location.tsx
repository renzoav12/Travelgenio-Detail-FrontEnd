import React, {useState, FunctionComponent} from 'react';
import { Grid, Box } from '@material-ui/core';
import { MapDialog, MapDialogProps } from "@hotels/map";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExploreIcon from '@material-ui/icons/Explore';
import config from '../../../../config';
import Keys from '@hotels/translation-keys';
import Translate from '@hotels/translation';
import { AccommodationProps } from "../Accommodation";
import RatingGuest from '../Rating/RatingGuest';

export interface Location {
  accommodation: AccommodationProps;
}
export interface LocationProps {
  address: AddressProps;
  geoPosition: GeoPositionProps;
}

export interface AddressProps {
  readonly country: CountryProps;
  readonly state: StateProps;
  readonly city: CityProps;
  readonly street: StreetProps;
  readonly zipCode: string;
}

export interface CountryProps {
  readonly name: string;
}

export interface StateProps {
  readonly name: string;
}

export interface CityProps {
  readonly name: string;
}

export interface StreetProps {
  readonly name: string;
  readonly number: string;
}

export interface GeoPositionProps {
  latitude: number;
  longitude: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    verticalCentered: {
      verticalAlign: "middle"
    },
    mapLink: {
      marginLeft: 30,
      cursor: "pointer",
      color: theme.palette.primary.main
    },
    mapDialog: {
      '& .MuiDialog-paper': {
        height: '90vh'
      }
    }

  }),
);

const Location: FunctionComponent<Location> = props => {

  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const showMap = () => {
    setOpen(true);
  };

  const closeMap = () => {
    setOpen(false);
  };

  const street = props.accommodation.location.address.street.name + " " + props.accommodation.location.address.street.number;
  const city = (street.length > 1 ? ", ": "") + props.accommodation.location.address.city.name;
  const address = <Box><LocationOnIcon fontSize="small" className={classes.verticalCentered}/> {street} {city}</Box>;
  
  const dialogProps: MapDialogProps = {
    title: props.accommodation.name,
    address: street + city,
    map: {
      places: [{geoPosition: {...props.accommodation.location.geoPosition}}],
      zoom: 14,
      googleMapsKey: config.GOOGLE_MAP_KEY,
      onlyMark: true
    },
    open,
    onClose: closeMap,
  }

  return <Box>
      <Grid container item xs={12}>
      {props.accommodation.guestRating? 
         <RatingGuest ratingGuest={props.accommodation.guestRating} /> : null}
        {address}
        <Box className={classes.mapLink} onClick={showMap}><ExploreIcon fontSize="small" className={classes.verticalCentered}/> 
        <Translate tkey={Keys.search.see_map} /></Box>
      </Grid>
      <MapDialog {...dialogProps}/>
    </Box>;
}

export default Location;
