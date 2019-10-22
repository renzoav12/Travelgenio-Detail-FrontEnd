import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import './Header.scss';
import Category from '../../../Category';
import Location, { LocationProps } from '../Location/Location';

export interface HeaderProps {
  name: string;
  location: LocationProps;
  category: CategoryProps;
}

export interface CategoryProps {
  id: string;
  code: string;
}

const Header = (props: HeaderProps) => {
    return <Grid container item>
        <Grid container item xs={12} alignItems="flex-start" className="otravo-header">
          <div className="otravo-title otravo-header-name">{props.name}</div>
          <Category stars={parseInt(props.category.code)}/>
        </Grid>
        <Grid item xs={12}>
          <Location location = {props.location}/>
        </Grid>
      </Grid>;
}

export default Header;
