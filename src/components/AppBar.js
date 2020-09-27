import React from 'react';
import { connect } from 'react-redux';
import UserMenu from './userMenu/UserMenu';
import AuthNav from './authNav/AuthNav';
import { getIsAuthenticated } from '../redux/auth/authSelectors';

const AppBar = ({ isAuthenticated }) => (
  <header>{isAuthenticated ? <UserMenu /> : <AuthNav />}</header>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
