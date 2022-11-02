import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63072734c0d0f2b80127fc98.mockapi.io/'

const fetchContact = createAsyncThunk('contacts/fetchContact',
    async () => {
        const { data } = await axios.get('/contacts')
        return data
    }
)

const addContact = createAsyncThunk('contacts/fetchContact',
    async (contact) => {
        const { data } = await axios.post('/contacts', contact)
        return data
    }
)

const deleteContact = createAsyncThunk('contacts/fetchContact',
    async (id) => {
        const { data } = await axios.delete(`/contacts/${id}`)
        return data
    }
)

const editContact = createAsyncThunk('contacts/fetchContact',
    async (id, name, number) => {
        const { data } = await axios.put(`/contacts/${id}`, {name, number})
        return data
    }
)

// const fetchContact = () => dispatch => {
    
//     dispatch(fetchContactRequest())

//     axios
//         .get('/contacts')
//         .then(({ data }) => dispatch(fetchContactSuccess(data)))
//         .catch(error => dispatch(fetchContactError(error)))
// }

// const addContact = contact => dispatch => {

//     dispatch(addContactRequest());
    
//     axios
//         .post('/contacts', contact)
//         .then(({ data }) => dispatch(addContactSuccess(data)))
//         .catch(error => dispatch(addContactError(error)))
// }

// const deleteContact = id => dispatch => {

//     dispatch(deleteContactRequest());

//     axios
//         .delete(`/contacts/${id}`)
//         .then(({ data }) => dispatch(deleteContactSuccess(data.id)))
//         .catch(error => dispatch(deleteContactError(error)))

// }


// const editContact = (id, name, number) => dispatch => {

//     dispatch(editContactRequest());

//     axios
//         .put(`/contacts/${id}`, {name, number})
//         .then(({ data }) => dispatch(editContactSuccess(data)))
//         .catch(error => dispatch(editContactError(error)))

// }




export { addContact, deleteContact, editContact, fetchContact }