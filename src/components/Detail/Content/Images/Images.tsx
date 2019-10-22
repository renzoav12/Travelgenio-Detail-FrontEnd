import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import './Images.scss';
import { height } from '@material-ui/system';
import Image from '../../../Image';

export interface ImagesProps {
  images: Array<ImageProps>;
}

export interface ImageProps {
  url:string;
}

const Images = (props: ImagesProps) => {

  const images = props.images.map(image => {
    return {
      original: image.url,
      thumbnail: image.url,
      originalClass: 'otravo-detail-image',
      thumbnailClass: 'otravo-detail-image-thumbnail'
    };
  });

  const imageGallery = <ImageGallery 
      items={images}
      showThumbnails={false}
    />;

  return <Grid container item xs={12} className="otravo-detail-images">
          <Grid item xs={12} md={8} className="otravo-detail-images-main-image">{imageGallery}</Grid>
          <Grid container item alignItems={"stretch"} justify={"space-between"} xs={12} md={4}>
            <Grid container item xs={6} md={12} alignItems={"stretch"} justify={"space-between"} className="otravo-detail-images-second-image"><Image url={props.images[1].url}/></Grid>
            <Grid container item xs={6} md={12} alignItems={"stretch"} justify={"space-between"}><Image url={props.images[2].url}/></Grid>
          </Grid>
    </Grid>;
}

export default Images;
