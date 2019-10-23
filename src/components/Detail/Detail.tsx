import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import './Detail.scss';
import Accommodation, { AccommodationProps } from './Content/Accommodation';

export interface DetailProps {
  accommodation: AccommodationProps;
}

const Detail = (detail: DetailProps) => {

  return <Grid container justify="space-around" alignItems="flex-start" className="otravo-box otravo-detail">
          <Grid item container xs={12}>
            <Accommodation {...detail.accommodation}/>
          </Grid>
        </Grid>;
}

export default Detail;
