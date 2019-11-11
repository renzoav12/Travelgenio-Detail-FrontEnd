import React, {SFC} from 'react';
import { Grid, Button } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import Image from '../../../Image';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './Images.scss';

export interface ImagesProps {
  images: Array<ImageProps>;
}

export interface ImageProps {
  url:string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullScreenButton: {
      position: "absolute",
      zIndex: 4,
      bottom: 10,
      right: 10
    }
  }),
);

const Images: SFC<ImagesProps> = props => {
  const classes = useStyles();
  
  const images = props.images.map(image => {
    return {
      original: image.url,
      thumbnail: image.url,
      originalClass: 'otravo-detail-image',
      thumbnailClass: 'otravo-detail-image-thumbnail'
    };
  });

  const fullscreenButton = (onClick, isFullscreen) => (
    <Button
        variant="contained" color="primary"     
        onClick={onClick}
        className={classes.fullScreenButton}
      >{(isFullscreen) ? "Volver" : "Ver Galería"}</Button>
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
