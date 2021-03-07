import React from 'react';

import Appbar from '../Appbar/';

import styles from './Layout.module.css';

const Layout = ({ children }) => 
  <div className={styles.container}>
    <Appbar />
    <hr />
    {children}
  </div>;

export default Layout;