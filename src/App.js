import React, { Component, Suspense, lazy } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from './components/AppBar';
import { Container } from './components/container/Container';
import { CustomSpinner } from './components/ui/customSpiner/CustomSpiner';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getCurrentUser } from './redux/auth/authOperations';

const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView/PhonebookView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <Container>
          <AppBar />
          <Suspense fallback={<CustomSpinner />}>
            <Switch>
              <PrivateRoute
                path="/contacts"
                redirectTo="/login"
                component={PhonebookView}
              />
              <PublicRoute
                path="/register"
                restricted={true}
                redirectTo="/contacts"
                component={RegisterView}
              />
              <PublicRoute
                path="/login"
                restricted={true}
                redirectTo="/contacts"
                component={LoginView}
              />
              <Redirect to="/contacts" />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
