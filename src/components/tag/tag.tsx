import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Tag: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Tag</>;
  };

  export default Tag;
