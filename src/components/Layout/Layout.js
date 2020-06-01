import React from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
  <React.Fragment>
    <Toolbar />
    <main className={styles.Content}>{props.children}</main>
  </React.Fragment>
);

export default Layout;
