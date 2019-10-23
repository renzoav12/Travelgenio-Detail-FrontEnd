import React from 'react';
import { Grid } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import './Images.scss';
import Image from '../../../Image';
import Hidden from '@material-ui/core/Hidden';

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

  const fullscreenButton = (onClick, isFullscreen) => (
    <button
        type="button"
        className="otravo-button otravo-fullscreen-button"
        onClick={onClick}
        aria-label="Open Fullscreen"
      >{(isFullscreen) ? "Volver" : "Ver Galería"}</button>
  );

  const imageGallery = <ImageGallery 
      items={images}
      showThumbnails={false}
      showPlayButton={false}
      renderFullscreenButton = {fullscreenButton}
    />;

  return <Grid container item xs={12} className="otravo-detail-images">
          <Grid item xs={12} md={8} className="otravo-detail-images-main-image">
            {imageGallery}
          </Grid>
          <Hidden only={['xs', 'sm']}>
            <Grid container item md={4}>
              <Grid container item md={12} className="otravo-detail-images-second-image">
                <Image url={props.images[1].url}/>
              </Grid>
              <Grid container item md={12}>
                <Image url={props.images[2].url}/>
              </Grid>
            </Grid>
          </Hidden>
    </Grid>;
}

export default Images;
