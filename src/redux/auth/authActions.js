import authTypes from './authTypes';

const registerRequest = profile => {
  return {
    type: authTypes.REGISTERREQUEST,
    payload: profile,
  };
};
const registerSuccess = profile => {
  return {
    type: authTypes.REGISTERSUCCESS,
    payload: profile,
  };
};
const registerError = error => {
  return {
    type: authTypes.REGISTERERROR,
    payload: error,
  };
};

const loginRequest = profile => {
  return {
    type: authTypes.LOGINREQUEST,
    payload: profile,
  };
};
const loginSuccess = profile => {
  return {
    type: authTypes.LOGINSUCCESS,
    payload: profile,
  };
};
const loginError = error => {
  return {
    type: authTypes.LOGINERROR,
    payload: error,
  };
};

const logoutRequest = profile => {
  return {
    type: authTypes.LOGOUTREQUEST,
    payload: profile,
  };
};
const logoutSuccess = profile => {
  return {
    type: authTypes.LOGOUTSUCCESS,
    payload: profile,
  };
};
const logoutError = error => {
  return {
    type: authTypes.LOGOUTERROR,
    payload: error,
  };
};

const getCurrentUserRequest = profile => {
  return {
    type: authTypes.GETCURRENTUSERREQUEST,
    payload: profile,
  };
};
const getCurrentUserSuccess = profile => {
  return {
    type: authTypes.GETCURRENTUSERSUCCESS,

    payload: profile,
  };
};
const getCurrentUserError = error => {
  return {
    type: authTypes.GETCURRENTUSERERROR,
    payload: error,
  };
};

export default {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
