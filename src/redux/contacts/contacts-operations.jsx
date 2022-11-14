import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContact = createAsyncThunk('contacts/fetchContact',
    async () => {
        const { data } = await axios.get('/contacts')
        return data
    }
)

export const addContact = createAsyncThunk('contacts/addContact',
    async (contact) => {
        const { data } = await axios.post('/contacts', contact)
        return data
    }
)

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id) => {
        const { data } = await axios.delete(`/contacts/${id}`)
        return data.id
    }
)

export const editContact = createAsyncThunk('contacts/editContact',
    async (contact) => {
        const {id, name, number} = contact 
        const { data } = await axios.patch(`/contacts/${id}`, {name, number})
        return data
    }
)

// sighup



// const fetchContact = () => dispatch => {
    
//     dispatch(fetchContactRequest())

//     axios
//         .get('/contacts')
//         .then(({ data }) => dispatch(fetchContactSuccess(data)))
//         .catch(error => dispatch(fetchContactError(error)))`
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
