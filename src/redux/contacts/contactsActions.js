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

const removeContactError = id => {
  return {
    type: REMOVECONTACTERROR,
    payload: id,
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

const fetchContactsError = items => {
  return {
    type: FECHCONTACTERROR,
    payload: items,
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
