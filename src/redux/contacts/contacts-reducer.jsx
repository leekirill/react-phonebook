import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, editContact, filter, fetchContactSuccess  } from './contacts-actions'

const contacts = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => {
        console.log(payload)
        return payload
    },
    [addContactSuccess]: (state, { payload }) => {
        return [...state, payload]
    },
    [deleteContactSuccess]: (state, { payload }) => {
        if (window.confirm("Are you sure?") === false) return
        return state.filter(contact => contact.id !== payload)
    },
    [editContact]: (state, { payload }) => {
        return [state.find(contact => contact.id === payload)]
    }
})

const filterChange = createReducer('', {
    [filter]: (_, { payload }) => {
        return payload
    }
})

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false
    
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

