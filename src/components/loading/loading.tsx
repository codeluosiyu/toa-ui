import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Loading: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Loading</>;
  };

  export default Loading;
