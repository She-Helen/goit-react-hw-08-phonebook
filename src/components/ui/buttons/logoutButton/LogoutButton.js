import React from 'react';
import styles from './LogoutButton.module.css';

export function LogoutButton({ onClick, type }) {
  return (
    <button type={type} className={styles.Button} onClick={onClick}>
      Logout
    </button>
  );
}
