import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => (
  <ul className={styles.nav_list}>
    <li className={styles.nav_list__element}>
      <NavLink
        to="/"
        exact
        activeClassName={styles['nav_list__link-active']}
        className={styles.nav_list__link}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.nav_list__element}>
      <NavLink
        to="/movies"
        activeClassName={styles['nav_list__link-active']}
        className={styles.nav_list__link}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Header;
