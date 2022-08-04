import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Rate: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Rate</>;
  };

  export default Rate;
