import React, {useState, FunctionComponent} from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import MapDialog, {MapDialogProps} from '@hotels/map-dialog';
import { Place } from '@hotels/map';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExploreIcon from '@material-ui/icons/Explore';

export interface Location {
  location: LocationProps;
  accommodationName: string;
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

  const street = props.location.address.street.name + " " + props.location.address.street.number;
  const city = (street.length > 1 ? ", ": "") + props.location.address.city.name;
  const address = <Box><LocationOnIcon fontSize="small" className={classes.verticalCentered}/> {street} {city}</Box>;
  
  const place: Place = {title : street+" "+city, geoPosition: props.location.geoPosition};
  
  const dialogProps: MapDialogProps = {
    title: props.accommodationName,
    address: street + city,
    map: {
      places: [place],
      zoom: 14
    },
    open,
    onClose: closeMap
  }

  return <Box>
      <Grid container item xs={12}>
        {address}
        <Box className={classes.mapLink} onClick={showMap}><ExploreIcon fontSize="small" className={classes.verticalCentered}/> Ver mapa</Box>
      </Grid>
      <MapDialog {...dialogProps}/>
    </Box>;
}

export default Location;
