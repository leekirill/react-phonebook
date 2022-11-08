import { combineReducers } from 'redux';
import { createReducer, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, editContact, fetchContact } from './contacts-operations'
import {filter} from './contacts-actions'

// const contacts = createReducer([], {
//     [fetchContact.fulfilled]: (_, { payload }) => payload,
//     [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//     [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
//     [editContact.fulfilled]: (state, { payload }) => state.map(contact => {
//         if (contact.id === payload.id) return payload
//         return contact
//     }) 
// })

// const filterChange = createReducer('', {
//     [filter]: (_, { payload }) => payload
// })

// const loading = createReducer(false, {
//     [fetchContact.pending]: () => true,
//     [fetchContact.fulfilled]: () => false,
//     [fetchContact.rejected]: () => false,
//     [addContact.pending]: () => true,
//     [addContact.fulfilled]: () => false,
//     [addContact.rejected]: () => false,
//     [deleteContact.pending]: () => true,
//     [deleteContact.fulfilled]: () => false,
//     [deleteContact.rejected]: () => false,
//     [editContact.pending]: () => true,
//     [editContact.fulfilled]: () => false,
//     [editContact.rejected]: () => false,
// })


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

// export default combineReducers({
//     contacts,
//     filterChange,
//     loading,
// })

const contactSlice = createSlice({
    name: 'contacts', 
    initialState: { contacts: [], filterChange: '', loading: false },
    reducers: {
        [filter]: (state, { payload }) => {
            return {
                ...state,
                filterChange: payload,
                loading: false
            }
        }
    },
    extraReducers: {
        [fetchContact.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                contacts: payload,
                loading: false
            }
        },
        [fetchContact.pending]: (state, _) => {
            return {
                ...state,
                loading: true
            }
        },

        [addContact.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                contacts: [payload, ...state.contacts],
                loading: false
            }
        },
        [addContact.pending]: (state, _) => {
            return {
                ...state,
                loading: true
            }
        },
        [deleteContact.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                contacts: state.contacts.filter(e => e.id !== payload),
                loading: false,
            }
        },
        [deleteContact.pending]: (state, _) => {
            return {
                ...state,
                loading: true,
            }
        },
        [editContact.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    if (contact.id === payload.id) return payload
                    return contact
                }),
                loading: false,
            }
        },
        [editContact.pending]: (state, _) => {
            return {
                ...state,
                loading: true,
            }
        },


    }
})

export default contactSlice.reducer