import React from 'react';
import './Image.scss';

export interface ImageProps {
    url: string;
};

const Image = (props: ImageProps) => {
  return <div className="otravo-image">
      <img src={props.url}/>
  </div>;
};

export default Image;
