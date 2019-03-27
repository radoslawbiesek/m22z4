import React from 'react';
import { Link } from 'react-router';
import styles from './Nav.css';

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <Link to="/home" className={styles.a}>Home</Link>
      <Link to="/posts" className={styles.a}>Posts</Link>
      <Link to="/about" className={styles.a}>About</Link>
    </div>
  );
}

export default Nav;