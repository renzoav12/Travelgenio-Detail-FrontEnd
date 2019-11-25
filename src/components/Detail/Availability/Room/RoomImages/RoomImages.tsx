import React, {SFC} from 'react';
import { Grid, Button } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import Image from '../../../../Image';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './RoomImages.scss';

export interface RoomImagesProps {
  images: Array<RoomImageProps>;
}

export interface RoomImageProps {
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

const Images: SFC<RoomImagesProps> = props => {
  const classes = useStyles();
  
  const images = props.images.map(image => {
    return {
      original: image.url,
      thumbnail: image.url
    };
  });

  const fullscreenButton = (onClick, isFullscreen) => (
    <Button
        variant="contained" color="primary"     
        onClick={onClick}
        className={classes.fullScreenButton}
      >{(isFullscreen) ? "Volver" : "Ver Galería"}</Button>
  );

  return <ImageGallery 
    items={images}
    showThumbnails={false}
    showPlayButton={false}
    renderFullscreenButton = {fullscreenButton}
  />;
}

export default Images;
