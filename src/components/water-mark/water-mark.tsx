import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const WaterMark: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>WaterMark</>;
  };

  export default WaterMark;
