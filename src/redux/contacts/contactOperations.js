import axios from 'axios';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contactsActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const addContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', { name, number })
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
    })
    .catch(err => dispatch(addContactError(err)));
};

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(fetchContactsSuccess(data));
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchContactsError(err));
    });
};

const removeContact = id => dispatch => {
  dispatch(removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(err => dispatch(removeContactError(err)));
};

export { addContact, fetchContacts, removeContact };

// от Кати
// export const addDataToCloudFirebase = (id, newContact) => {
//   fs.collection(`${id}`).add({ ...newContact });
// };
// export const deleteContactFromCloudFirebase = (id, idDoc) => {
//   fs.collection(`${id}`).doc(`${idDoc}`).delete();
// };

// 1: 20
// export const fs = firebase.firestore();
