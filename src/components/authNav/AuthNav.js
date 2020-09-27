import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './nav.module.css';

const AuthNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <NavLink
            to={{
              pathname: '/login',
            }}
            className={styles.Link}
            activeClassName={styles.linkFocusColor}
          >
            Login
          </NavLink>
        </li>
        <li className={styles.navListItem}>
          <NavLink
            exact
            to="/register"
            className={styles.Link}
            activeClassName={styles.linkFocusColor}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default withRouter(AuthNav);
