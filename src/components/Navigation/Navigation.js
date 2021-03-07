import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => (
  <ul className={styles.navigationList}>
    <li className={styles.navigationListItem}>
      <NavLink
        exact
        to={routes.home}
        className={styles.navigationLink}
        activeClassName={styles.navigationLinkActive}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.movies}
        className={styles.navigationLink}
        activeClassName={styles.navigationLinkActive}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;