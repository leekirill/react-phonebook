import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, editContact, fetchContact } from './contacts-operations'
import {filter} from './contacts-actions'

const contacts = createReducer([], {
    [fetchContact.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
    [editContact.fulfilled]: (state, { payload }) => state.map(contact => {
        if (contact.id === payload.id) return payload
        return contact
    })
})

const filterChange = createReducer('', {
    [filter]: (_, { payload }) => payload
})

const loading = createReducer(false, {
    [fetchContact.pending]: () => true,
    [fetchContact.fulfilled]: () => false,
    [fetchContact.rejected]: () => false,
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
    [editContact.pending]: () => true,
    [editContact.fulfilled]: () => false,
    [editContact.rejected]: () => false,
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

