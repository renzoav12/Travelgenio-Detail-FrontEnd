import React from 'react';
import { Grid } from '@material-ui/core';
import './Pricing.scss';
import Description from '../../../../Description';

export interface PricingProps {
  id: string;
  mealPlan: string;
  cancelPolicies: Array<string>;
  nights: number;
  nightlyPrice: Price;
  stayPrice: Price;
}

export interface Price {
  amount: string;
  currency: string;
}

const Pricing = (props: PricingProps) => {

  const mealPlan = <Description text={props.mealPlan}/>

  return <Grid container item className="otravo-pricing">
    <Grid container item xs={5} sm={6}>
      <Grid item xs={12} className="otravo-pricing-mealplan">{mealPlan}</Grid>
    </Grid>
    <Grid container item xs={4} sm={4} justify="flex-end">
      <Grid item xs={12} className="otravo-pricing-price">{props.stayPrice.amount} {props.stayPrice.currency}</Grid>
      <Grid item xs={12} className="otravo-pricing-conditions">{props.nights} noches<br/> Incluye impuestos</Grid>
    </Grid>
    <Grid item xs={3} sm={2}><button className="otravo-button">Reservar</button></Grid>
  </Grid>
}

export default Pricing;
