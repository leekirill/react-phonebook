import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, editContactRequest, editContactSuccess, editContactError, editContact, filter, fetchContactSuccess  } from './contacts-actions'

const contacts = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload),
    [editContactSuccess]: (state, { payload }) => state.map(contact => {
        if (contact.id === payload.id) return payload
        return contact
    })
})

const filterChange = createReducer('', {
    [filter]: (_, { payload }) => payload
})

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [editContactRequest]: () => true,
    [editContactSuccess]: () => false,
    [editContactError]: () => false
})


// const contacts = (state = JSON.parse(localStorage.getItem("contacts")) ?? [], { type, payload }) => {
//     switch(type) {
//         case types.delete: 
//             return [...state, payload] 
//         case types.DELETE:
//             if (window.confirm("Are you sure?") === false) return
//             return state.filter(contact => contact.id !== payload)

//         default: 
//             return state
//     }
// }

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload
//         default: 
//             return state
//     }
// }

export default combineReducers({
    contacts,
    filterChange,
    loading,
})

