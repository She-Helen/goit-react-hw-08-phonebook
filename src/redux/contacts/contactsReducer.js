import { combineReducers } from 'redux';
import {
  FILTERCONTACTS,
  ADDCONTACTREQUEST,
  ADDCONTACTSUCCESS,
  ADDCONTACTERROR,
  FECHCONTACTREQUEST,
  FECHCONTACTSUCCESS,
  FECHCONTACTERROR,
  REMOVECONTACTREQUEST,
  REMOVECONTACTSUCCESS,
  REMOVECONTACTERROR,
} from './contactsTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case ADDCONTACTSUCCESS:
      return [...state, action.payload];
    case FECHCONTACTSUCCESS:
      return action.payload;
    case REMOVECONTACTSUCCESS:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};
const filter = (state = '', action) => {
  switch (action.type) {
    case FILTERCONTACTS:
      return action.payload;
    default:
      return state;
  }
};
const loading = (state = false, action) => {
  switch (action.type) {
    case ADDCONTACTREQUEST:
    case FECHCONTACTREQUEST:
    case REMOVECONTACTREQUEST:
      return true;

    case ADDCONTACTSUCCESS:
    case ADDCONTACTERROR:
    case FECHCONTACTSUCCESS:
    case FECHCONTACTERROR:
    case REMOVECONTACTSUCCESS:
    case REMOVECONTACTERROR:
      return false;

    default:
      return state;
  }
};

export default combineReducers({ items, filter, loading });
