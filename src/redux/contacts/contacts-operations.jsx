import axios from 'axios';
import { addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, fetchContactRequest, fetchContactSuccess, fetchContactError } from './contacts-actions'

axios.defaults.baseURL = 'https://63072734c0d0f2b80127fc98.mockapi.io/'

const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest())

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error)))
}

const addContact = contact => dispatch => {

    dispatch(addContactRequest());
    
    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)))
}

const deleteContact = id => dispatch => {

    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(({ data }) => dispatch(deleteContactSuccess(data)))
        .catch(error => dispatch(deleteContactError(error)))

}



export { addContact, deleteContact, fetchContacts }