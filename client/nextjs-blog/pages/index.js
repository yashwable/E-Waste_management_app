import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Import your CSS module
import Home from './landingPage/homePage';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.taskbar}>
        <button className={styles.menuButton}>Menu</button>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <button className={styles.searchButton}>Search</button>
        </div>
        <Link href="/signup" className={styles.link}>
          <button className={styles.button}>Signup</button>
        </Link>
        <Link href="/login" className={styles.link}>
          <button className={styles.button}>Login</button>
        </Link>
      </div>
      <Home />
      {/* Other content of your home page */}
    </div>
  );
};

export default HomePage;
