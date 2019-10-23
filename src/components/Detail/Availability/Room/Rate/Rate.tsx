import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './Rate.scss';
import Description from '../../../../Description';

export interface RateProps {
  price: string;
  currency: string;
  token: string;
  mealPlan:string;
  cancelPolicy: string;
  nights: number;
  onBook:(token:string) => void;
}

const Rate = (props: RateProps) => {

  const mealPlan = <Description text={props.mealPlan}/>
  const cancelPolicy = <Description text={props.cancelPolicy}/>

  return <Grid container item className="otravo-rate">
    <Grid container item xs={5} sm={6}>
      <Grid item xs={12} className="otravo-rate-mealplan">{mealPlan}</Grid>
      <Grid item xs={12}>{cancelPolicy}</Grid>
    </Grid>
    <Grid container item xs={4} sm={4} justify="flex-end">
      <Grid item xs={12} className="otravo-rate-price">{props.price} {props.currency}</Grid>
      <Grid item xs={12} className="otravo-rate-conditions">{props.nights} noches<br/> Incluye impuestos</Grid>
    </Grid>
    <Grid item xs={3} sm={2}><button className="otravo-button" onClick={() => props.onBook(props.token)}>Reservar</button></Grid>
  </Grid>
}

export default Rate;
