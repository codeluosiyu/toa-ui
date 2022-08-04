import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Card: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Card</>;
  };

  export default Card;
