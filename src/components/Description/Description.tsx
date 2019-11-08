import React from 'react';
import { Typography } from '@material-ui/core';

export interface DescriptionProps {
  readonly text: string;
}

const Description = (props: DescriptionProps) => {
  let description: JSX.Element | Array<JSX.Element>;

  if(!props.text || props.text.indexOf("\n") === -1) {
    description = <Typography paragraph={true} align="justify">{props.text}</Typography>;
  } else {
    description = props.text
      .split("\n")
      .map((paragraph, index) => <div><Typography paragraph={true} align="justify" key={index}>{paragraph}</Typography></div>)
  }
  
  return <div>{description}</div>;
}

export default Description;
