import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer'

const store = configureStore({
    reducer: contactsReducer
})

export default store
