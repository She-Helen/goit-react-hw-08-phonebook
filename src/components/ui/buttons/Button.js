import React from 'react';
import styles from './Button.module.css';

export function Button({ btnText }) {
  return (
    <button type="submit" className={styles.Button}>
      {btnText}
    </button>
  );
}
