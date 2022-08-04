import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Swiper: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Swiper</>;
  };

  export default Swiper;
