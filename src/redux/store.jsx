import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer'
import authReducer from './auth/auth-reducer';

const store = configureStore({
    reducer: {contactsReducer, authReducer}
})

export default store
