import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer'
import authReducer from './auth/auth-reducer';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



const authPersistConfig = {
    key: 'authReducer',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        contactsReducer,
        authReducer: persistReducer(authPersistConfig, authReducer),
        middleware: getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
    },
    
})

export const persistor = persistStore(store)
