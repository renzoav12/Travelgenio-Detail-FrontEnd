import React, {FunctionComponent} from 'react';
import { Grid, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export interface Amenities {
  amenities: Array<AmenityProps>;
  title: string;
}

export interface AmenityProps {
  id: string;
  name: string;
}

const Amenities: FunctionComponent<Amenities> = props => {
  const amenities = props.amenities.map(amenity => 
    <Grid item xs={12} sm={6} md={4} lg={3} key={amenity.id}><LocationOnIcon/> {amenity.name}</Grid>);    
    
    return <Grid container justify="flex-start" spacing={2}>
      <Grid item xs={12}><Typography variant="h1">{props.title}</Typography></Grid>
      {amenities}
    </Grid>;
}

export default Amenities;
