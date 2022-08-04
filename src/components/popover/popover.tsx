import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Popover: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Popover</>;
  };

  export default Popover;
