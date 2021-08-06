
import React from 'react';
import Header from '../components/Header';
import '../styles/components/Layout.css';

const Layout = ({ children }) => (
    <div className="Main">
    <Header />
      {children}
    </div>
  );

export default Layout;