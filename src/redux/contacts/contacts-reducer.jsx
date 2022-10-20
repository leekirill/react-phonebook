import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filter } from './contacts-actions'

const contacts = createReducer(JSON.parse(localStorage.getItem("contacts")) ?? [], {
    [addContact]: (state, { payload }) => {
        return [...state, payload]
    },
    [deleteContact]: (state, { payload }) => {
        if (window.confirm("Are you sure?") === false) return
        return state.filter(contact => contact.id !== payload)
    }
})

const filterChange = createReducer('', {
    [filter]: (_, { payload }) => {
        return payload
    }
})

// const contacts = (state = JSON.parse(localStorage.getItem("contacts")) ?? [], { type, payload }) => {
//     switch(type) {
//         case types.ADD: 
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
    filterChange
})

