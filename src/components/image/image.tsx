import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Image: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Image</>;
  };

  export default Image;
