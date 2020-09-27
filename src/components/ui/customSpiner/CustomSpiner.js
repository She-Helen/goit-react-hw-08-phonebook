import React from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Spiner.module.css';

export function CustomSpinner() {
  // const loading = useSelector(state => state.contacts.loading);

  return (
    <div className={styles.wrap}>
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
