import React from 'react';

import { Title } from '../components/Title';

export const Layout = ({ children }) => {
  return (
    <>
      <Title />
      {children}
    </>
  );
};
