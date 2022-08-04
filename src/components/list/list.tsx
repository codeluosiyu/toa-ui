import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const List: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>List</>;
  };

  export default List;
