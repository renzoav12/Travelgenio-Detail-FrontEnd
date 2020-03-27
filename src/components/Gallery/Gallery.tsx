import React, { FunctionComponent } from 'react';
import { Button, Box } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import loadingHotelImage from '../../assets/images/loadingHotel.jpg';
import Img from 'react-image';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Image from '../Image/Image';

export interface GalleryProps {
  images: Array<Image>;
  loading: string;
}

export interface Image {
  url:string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loadingImage:{
      width: '100%',
      height: '100%'
    },
    gallery: {
      height: '100%',

      '& .image-gallery': {
        height: '100%',
      },

      '& .image-gallery-content': {
        height: '100%'
      },

      '& .image-gallery-slide-wrapper': {
        position: 'relative',
        height: '100%'
      },

      '& .image-gallery-swipe': {
        height: '100%',
        overflow: 'hidden'
      },

      '& .image-gallery-slides': {
        height: '100%',
        position: 'relative'
      },


      '& .image-gallery-slides .image-gallery-slide': {
        height: '100%',
        width: '100%',
        position: 'absolute'
      },

      '& .image-gallery-slides .image-gallery-slide div': {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        margin: 0,
        position: 'relative',
        backgroundColor: '#EEEDED'
      },

      '& .image-gallery-slides .image-gallery-slide div img': {
        position: 'absolute',
        margin: 'auto',
        minHeight: '100%',
        minWidth: '100%',
        left: '-100%',
        right: '-100%',
        top: '-100%',
        bottom: '-100%',
      }

    },
    leftNavButton: {
      position: "absolute",
      minWidth: 40,
      width: 40,
      height: 40,
      borderRadius: 40,
      zIndex:10,
      left:10,
      top:"40%"
    },   
    rightNavButton: {
      position: "absolute",
      minWidth: 40,
      width: 40,
      height: 40,
      borderRadius: 40,
      zIndex:10,
      right:10,
      top:"40%"
    },
    fullscreenButton: {
      marginTop: -65
    },
    secondImage: {
      paddingBottom: 10
    }
  }),
);

const Gallery: FunctionComponent<GalleryProps> = props => {
  const classes = useStyles();
  
  const images = props.images.map(image => {
    return {
      original: image.url,
      thumbnail: '',
    };
  });

  const loadingImage = <Img src={loadingHotelImage} className={classes.loadingImage}/>;

  const  fullscreenButton = (onClick, isFullscreen) => {
    return <Button 
        variant="contained" 
        color="primary"
        className={classes.fullscreenButton}
        onClick={onClick}>
          {isFullscreen ? "Volver" : "Ver Galería"}
          </Button>;
  };

  const renderLeftNav = (onClick, disables) => {
    return <Button 
        variant="contained" 
        color="primary" 
        className={classes.leftNavButton}
        onClick={onClick}>
          <KeyboardArrowLeftIcon/>
    </Button>;
  }

  const renderRightNav = (onClick, disables) => {
    return <Button 
        variant="contained" 
        color="primary"
        className={classes.rightNavButton}        
        onClick={onClick}>
          <KeyboardArrowRightIcon/>
    </Button>;
  }

  const gallery = <ImageGallery 
      items={images}
      showThumbnails = {false}
      showPlayButton = {false}
      renderFullscreenButton = {fullscreenButton}
      renderLeftNav = {renderLeftNav}
      renderRightNav = {renderRightNav}
    />;
  
  return <Box className={classes.gallery}>
      {(props.loading === 'loading') ? loadingImage : gallery}
    </Box>;
}

export default Gallery;
