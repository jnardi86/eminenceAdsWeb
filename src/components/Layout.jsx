import React from 'react';

import Footer from './Footer';
import NavbarView from './navbar/view/NavbarView';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
    <NavbarView/>
      <main className="flex-grow">{children}</main>
    <Footer />
    </div>
  );
};

export default Layout;
