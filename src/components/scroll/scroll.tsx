import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Scroll: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Scroll</>;
  };

  export default Scroll;
