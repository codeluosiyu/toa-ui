import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Textarea: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Textarea</>;
  };

  export default Textarea;
