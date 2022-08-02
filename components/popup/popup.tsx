import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Popup: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Popup</>;
  };

  export default Popup;
