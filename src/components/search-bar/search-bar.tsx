import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const SearchBar: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>SearchBar</>;
  };

  export default SearchBar;
