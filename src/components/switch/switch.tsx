import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Switch: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Switch</>;
  };

  export default Switch;
