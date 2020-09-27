import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomInput.module.css';

export function CustomInput({
  name,
  handleChange,
  value,
  type,
  isRequired,
  labelText,
}) {
  return (
    <>
      <div className={styles.inputWrap}>
        <label className={styles.label}>
          <input
            value={value}
            type={type}
            name={name}
            onChange={handleChange}
            required={isRequired}
            className={styles.input}
            placeholder=" "
          />
          <span className={styles.labelText}>{labelText}</span>
        </label>
      </div>
    </>
  );
}

CustomInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
