import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Badge: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Badge</>;
  };

  export default Badge;
