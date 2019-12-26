import React from 'react';
import Img from 'react-image'
import loadingImage from '../../assets/images/loadingHotel.jpg';
import './Image.scss';

export interface ImageProps {
    url: string;
};

const loadingComponent = () => (
  <img className="otravo-loading-image" src={loadingImage}/>
)

const Image = (props: ImageProps) => {
  return <div className="otravo-image">
      <Img src={props.url} loader={loadingComponent()} unloader={loadingComponent()}/>
  </div>;
};

export default Image;
