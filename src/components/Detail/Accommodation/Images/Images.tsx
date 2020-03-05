import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import Image from '../../../Image/Image';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import loadingHotelImage from '../../../../assets/images/loadingHotel.jpg';
import Img from 'react-image';
import Gallery from '../../../Gallery/Gallery';

export interface ImagesProps {
  images: Array<ImageProps>;
  loading: boolean;
}

export interface ImageProps {
  url:string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loadingImage:{
      width: '100%',
      height: '100%'
    },
    galleryImages: {
      height: 530,
      [theme.breakpoints.up('md')]: {
        paddingRight: 10
      }
    },   
    secondImage: {
      paddingBottom: 10
    }
  }),
);

const Images: FunctionComponent<ImagesProps> = props => {
  const classes = useStyles();

  const loadingImage = <Img src={loadingHotelImage} className={classes.loadingImage}/>;
  
  return <Grid container item xs={12}>
    <Grid item xs={12} md={8} className={classes.galleryImages}>
      <Gallery {...props}/>
    </Grid>
    <Hidden only={['xs', 'sm']}>
      <Grid container item md={4}>
        <Grid container item md={12} className={classes.secondImage}>
          {props.loading ? loadingImage : <Image url={props.images.length > 1 ? props.images[1].url : ''}/>}
        </Grid>
        <Grid container item md={12}>
          {props.loading ? loadingImage : <Image url={props.images.length > 2 ? props.images[2].url : ''}/>}
        </Grid>
      </Grid>
    </Hidden>
  </Grid>;
}

export default Images;
