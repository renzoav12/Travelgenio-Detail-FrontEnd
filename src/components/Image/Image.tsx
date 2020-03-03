import React, { FunctionComponent } from 'react';
import Img from 'react-image'
import loadingHotelImage from '../../assets/images/loadingHotel.jpg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface ImageProps {
    url: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loadingImage:{
      width: '100%',
      height: '100%'
    },
    image: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      margin: 0,
      position: 'relative',
      backgroundColor: '#EEEDED',
      '& img': {
        position: 'absolute',
        margin: 'auto',
        minHeight: '100%',
        minWidth: '100%',
        left: '-100%',
        right: '-100%',
        top: '-100%',
        bottom: '-100%',
        [theme.breakpoints.up('md')]: {
          transform: 'scale(0.4)',
        },
        [theme.breakpoints.up('lg')]: {
          transform: 'scale(0.6)',
        },
        [theme.breakpoints.up('xl')]: {
          transform: 'scale(1)',
        }
      }
    }
  }),
);

const Image: FunctionComponent<ImageProps> = props => {
  const classes = useStyles();
  
  const loadingComponent = <Img src={loadingHotelImage} className={classes.loadingImage}/>;
  
  return <div className={classes.image}>
      <Img src={props.url} loader={loadingComponent} unloader={loadingComponent}/>
  </div>;
};

export default Image;
