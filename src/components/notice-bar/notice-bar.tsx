import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const NoticeBar: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>NoticeBar</>;
  };

  export default NoticeBar;
