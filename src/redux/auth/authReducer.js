import { combineReducers } from 'redux';

import authTypes from './authTypes';

const initialProfileState = { name: null, email: null };

const profile = (state = initialProfileState, { type, payload }) => {
  switch (type) {
    case authTypes.REGISTERSUCCESS:
    case authTypes.LOGINSUCCESS:
      return payload.user;
    case authTypes.GETCURRENTUSERSUCCESS:
      return payload;
    case authTypes.LOGOUTSUCCESS:
      return initialProfileState;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.REGISTERSUCCESS:
    case authTypes.LOGINSUCCESS:
      return payload.token;

    case authTypes.LOGOUTSUCCESS:
      return null;

    default:
      return state;
  }
};

const errorNotification = (errCode, type) => {
  switch (errCode) {
    case 400:
      return type === authTypes.REGISTERERROR
        ? 'Такой логин уже существует'
        : 'Ошибка логина или пароля';
    case 500:
      return 'Ошибка сервера';
    case 401:
      return 'Нет заголовка с токеном';
    case 404:
      return 'Коллекции такого владельца не существует';
    default:
      return errCode;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.REGISTERERROR:
      return errorNotification(payload, authTypes.REGISTERERROR);
    case authTypes.LOGINERROR:
    case authTypes.LOGOUTERROR:
    case authTypes.GETCURRENTUSERERROR:
      return errorNotification(payload);
    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type, payload }) => {
  switch (type) {
    case authTypes.REGISTERSUCCESS:
    case authTypes.LOGINSUCCESS:
    case authTypes.GETCURRENTUSERSUCCESS:
      return true;

    case authTypes.REGISTERERROR:
    case authTypes.LOGINERROR:
    case authTypes.LOGOUTERROR:
    case authTypes.GETCURRENTUSERERROR:
    case authTypes.LOGOUTSUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  profile,
  isAuthenticated,
  token,
  error,
});
