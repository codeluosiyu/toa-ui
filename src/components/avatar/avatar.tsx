import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Avatar: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Avatar</>;
  };

  export default Avatar;
