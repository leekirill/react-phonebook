import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer'
import authReducer from './auth/auth-reducer';
import {
    persistStore,
    persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'authReducer',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        contactsReducer,
        authReducer: persistReducer(authPersistConfig, authReducer),
    }
    
})

export const persistor = persistStore(store)
