import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Accommodation, { AccommodationProps } from './Content/Accommodation';
import './Detail.scss';

export interface DetailProps {
  accommodation: AccommodationProps;
}

const Detail = (detail: DetailProps) => {
  return <Grid container>
          <Grid item container xs={12} className="otravo-box otravo-detail">
            <Accommodation {...detail.accommodation}/>
          </Grid>
        </Grid>;
}

export default Detail;