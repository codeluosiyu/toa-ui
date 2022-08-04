import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Button: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Button</>;
  };

  export default Button;
