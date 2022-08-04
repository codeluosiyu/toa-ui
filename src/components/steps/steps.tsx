import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Steps: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Steps</>;
  };

  export default Steps;
