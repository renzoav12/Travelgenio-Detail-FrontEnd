import React, {SFC} from 'react';
import { Grid, Button} from '@material-ui/core';
import Description from '../../../../Description';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


export interface PricingProps {
  rate: Rate;
  onSelect: (id: string) => void;
}
export interface Rate {
  id: string;
  mealPlan: string;
  cancelPolicy: Array<string>;
  nights: number;
  nightlyPrice: Price;
  stayPrice: Price;
}

export interface Price {
  amount: string;
  currency: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    priceSection: {
      backgroundColor: theme.palette.background.default,
      padding: 20,
      borderRadius: theme.shape.borderRadius
    },
    cancelPolicy: {
      '& p': {
        fontWeight: "600"
      }
    },
    price: {
      color: theme.palette.primary.main,
      fontSize: 20,
      fontWeight: "bold",
      paddingRight: 20
    },
    priceDescription: {
      paddingRight: 20,
      textAlign: "right"
    }

  }),
);

const Pricing: SFC<PricingProps> = props => {
  const classes = useStyles();

  const cancelPolicies = props.rate.cancelPolicy.map((cancelPolicy, index) => <Description text={cancelPolicy} key={index}></Description>);

  return <Grid container className={classes.priceSection}>
    <Grid container item xs={12} sm={12} md={6}>
      <Grid item xs={12}>
        <Description text={props.rate.mealPlan}/>
      </Grid>
      <Grid item xs={12} className={classes.cancelPolicy}>
        {cancelPolicies}
      </Grid>
    </Grid>
    <Grid container item xs={12} sm={8} md={4} justify="flex-end">
      <Grid container item xs={12} justify="flex-end" className={classes.price}>{props.rate.stayPrice.amount} {props.rate.stayPrice.currency}</Grid>
      <Grid container item xs={12} justify="flex-end" className={classes.priceDescription}>{props.rate.nights} noches<br/> Incluye impuestos</Grid>
    </Grid>
    <Grid item xs={12} sm={4} md={2}>
      <Button variant="contained" color="primary" fullWidth onClick={(event) => props.onSelect(props.rate.id)}>Reservar</Button>
    </Grid>
  </Grid>
}

export default Pricing;
