import React from 'react';
import { ReactChildren } from 'types';

interface Props {
  children: ReactChildren;
}

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    {children}
  </div>
);

export default Layout;
