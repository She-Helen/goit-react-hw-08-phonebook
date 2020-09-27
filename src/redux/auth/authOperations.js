import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const unsetToken = () => (axios.defaults.headers.common.Authorization = '');

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());
  axios
    .post('/users/signup', credentials)
    .then(res => {
      dispatch(authActions.registerSuccess(res.data));
      setToken(res.data.token);
    })
    .catch(err => dispatch(authActions.registerError(err.message)));
};

const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());
  axios
    .post('/users/login', credentials)
    .then(res => {
      dispatch(authActions.loginSuccess(res.data));
      setToken(res.data.token);
    })
    .catch(err => dispatch(authActions.logoutError(err.message)));
};

const logout = token => dispatch => {
  dispatch(authActions.logoutRequest());
  axios
    .post('/users/logout', token)
    .then(() => {
      unsetToken();
      dispatch(authActions.logoutSuccess());
    })
    .catch(err => dispatch(authActions.logoutError(err.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  setToken(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  axios
    .get('/users/current')
    .then(res => {
      dispatch(authActions.getCurrentUserSuccess(res.data));
    })
    .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};

export { register, login, logout, getCurrentUser };
