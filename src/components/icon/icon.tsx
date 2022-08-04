import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Icon: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Icon</>;
  };

  export default Icon;
