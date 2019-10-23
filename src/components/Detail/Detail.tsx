import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Accommodation, { AccommodationProps } from './Content/Accommodation';
import Availability from './Availability';
import './Detail.scss';


export interface DetailProps {
  accommodation: AccommodationProps;
}

const Detail = (detail: DetailProps) => {
  const onBook = (token:string): void => {
    console.info(token);
  }

  const availability = {rooms : [
    {
      name: "Habitacion Simple",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sapien non vestibulum rutrum. In posuere condimentum nisl quis feugiat. Etiam vel interdum mauris. Aenean et dapibus odio, faucibus consequat massa. Aenean rutrum feugiat purus non mattis. Integer dapibus lectus et odio aliquam ultrices. In hac habitasse.",
      rates: [
        {
          price: "280.10",
          currency: "USD",
          token: "111",
          mealPlan:"Sin desayuno",
          cancelPolicy: "No es reembolsable.",
          nights: 12,
          onBook: onBook
        },
        {
          price: "320.80",
          currency: "USD",
          token: "222",
          mealPlan:"Desayuno para dos personas.",
          cancelPolicy: "Cancelable has dos días antes.",
          nights: 12,
          onBook: onBook
        }
      ]
    },
    {
      name: "Habitacion Queen",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sapien non vestibulum rutrum. In posuere condimentum nisl quis feugiat. Etiam vel interdum mauris. Aenean et dapibus odio, faucibus consequat massa. Aenean rutrum feugiat purus non mattis. Integer dapibus lectus et odio aliquam ultrices. In hac habitasse.",
      rates: [
        {
          price: "280.10",
          currency: "USD",
          token: "333",
          mealPlan:"Sin desayuno",
          cancelPolicy: "No es reembolsable.",
          nights: 12,
          onBook: onBook
        },
        {
          price: "320.80",
          currency: "USD",
          token: "444",
          mealPlan:"Desayuno para dos personas.",
          cancelPolicy: "Cancelable hasta dos días antes.",
          nights: 12,
          onBook: onBook
        }
      ]
    },
    {
      name: "Habitacion King",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sapien non vestibulum rutrum. In posuere condimentum nisl quis feugiat. Etiam vel interdum mauris. Aenean et dapibus odio, faucibus consequat massa. Aenean rutrum feugiat purus non mattis. Integer dapibus lectus et odio aliquam ultrices. In hac habitasse.",
      rates: [
        {
          price: "280.20",
          currency: "USD",
          token: "555",
          mealPlan:"Sin desayuno",
          cancelPolicy: "No es reembolsable.",
          nights: 12,
          onBook: onBook
        },
        {
          price: "320.78",
          currency: "USD",
          token: "666",
          mealPlan:"Desayuno para dos personas.",
          cancelPolicy: "Cancelable hasta dos días antes.",
          nights: 12,
          onBook: onBook
        }
      ]
    }
  ]};

  return <Grid container className="otravo-detail">
          <Grid item container xs={12} className="otravo-box">
            <Accommodation {...detail.accommodation}/>
          </Grid>
          <Grid item container xs={12} className="otravo-box otravo-availability">
            <Availability {...availability}/>
          </Grid>
        </Grid>;
}

export default Detail;