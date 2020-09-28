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

const addContactRequest = item => {
  return {
    type: ADDCONTACTREQUEST,
    payload: item,
  };
};

const addContactSuccess = item => {
  return {
    type: ADDCONTACTSUCCESS,
    payload: item,
  };
};

const addContactError = item => {
  return {
    type: ADDCONTACTERROR,
    payload: item,
  };
};

const removeContactRequest = id => {
  return {
    type: REMOVECONTACTREQUEST,
    payload: id,
  };
};

const removeContactSuccess = id => {
  return {
    type: REMOVECONTACTSUCCESS,
    payload: id,
  };
};

const removeContactError = err => {
  return {
    type: REMOVECONTACTERROR,
    payload: err,
  };
};

const fetchContactsRequest = items => {
  return {
    type: FECHCONTACTREQUEST,
    payload: items,
  };
};

const fetchContactsSuccess = items => {
  return {
    type: FECHCONTACTSUCCESS,
    payload: items,
  };
};

const fetchContactsError = err => {
  return {
    type: FECHCONTACTERROR,
    payload: err,
  };
};

const filterContacts = value => {
  return {
    type: FILTERCONTACTS,
    payload: value,
  };
};

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  filterContacts,
};
