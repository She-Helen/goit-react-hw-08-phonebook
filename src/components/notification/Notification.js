import React from 'react';
import styles from './Notification.module.css';

export function Notification(props) {
  return <div className={styles.pop}>{props.text}</div>;
}
