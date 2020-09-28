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
      setToken(res.data.token);
      dispatch(authActions.registerSuccess(res.data));
    })
    .catch(err => dispatch(authActions.registerError(err.response.status)));
};

const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());
  axios
    .post('/users/login', credentials)
    .then(res => {
      dispatch(authActions.loginSuccess(res.data));
      setToken(res.data.token);
    })
    .catch(err => {
      console.log(err.response);
      dispatch(authActions.loginError(err.response.status));
    });
};

const logout = token => dispatch => {
  dispatch(authActions.logoutRequest());
  axios
    .post('/users/logout', token)
    .then(() => {
      unsetToken();
      dispatch(authActions.logoutSuccess());
    })
    .catch(err => dispatch(authActions.logoutError(err.response.status)));
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
    .catch(err =>
      dispatch(authActions.getCurrentUserError(err.response.status)),
    );
};

export { register, login, logout, getCurrentUser };
