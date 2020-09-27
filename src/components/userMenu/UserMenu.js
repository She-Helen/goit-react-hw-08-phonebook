import React from 'react';
import { connect } from 'react-redux';
import { LogoutButton } from '../ui/buttons/logoutButton/LogoutButton';
import { logout } from '../../redux/auth/authOperations';
import { getUsername } from '../../redux/auth/authSelectors';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => {
  const handelClick = () => {
    onLogout();
  };
  return (
    <div className={styles.menuBox}>
      <div className={styles.greeting}>
        <span>Welcome, </span>
        <span className={styles.userName}>{name}</span>
      </div>

      <LogoutButton type="button" onClick={handelClick} Logout>
        Logout
      </LogoutButton>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
