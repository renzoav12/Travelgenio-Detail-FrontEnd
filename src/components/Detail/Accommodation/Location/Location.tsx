import React, {useState, FunctionComponent} from 'react';
import { Grid, Box, PopperPlacementType, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExploreIcon from '@material-ui/icons/Explore';
import LocationMap from './LocationMap/LocationMap';

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
  
  return <Box>
      <Grid container item xs={12}>
        {address}
        <Box className={classes.mapLink} onClick={showMap}><ExploreIcon fontSize="small" className={classes.verticalCentered}/> Ver mapa</Box>
      </Grid>
      <Dialog maxWidth={'md'} fullWidth={true} className={classes.mapDialog} open={open} onClose={closeMap} aria-labelledby="map-title">
        <DialogTitle id="simple-dialog-title">
          <Typography variant="h1">{props.accommodationName}</Typography>
          {address}
        </DialogTitle>
        <DialogContent>
          <LocationMap location={props.location} zoom={14}/>
        </DialogContent>
      </Dialog>
    </Box>;
}

export default Location;
