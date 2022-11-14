import { createSlice } from "@reduxjs/toolkit"
import * as authOperations from './auth-operations'

const initialState = {
    user: { name: null, email: null },
    token: null,
    toLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled]: (state, { payload }) => {
            state.user = payload.user
            state.token = payload.token
            state.toLoggedIn = true
        },
        [authOperations.logIn.fulfilled]: (state, { payload }) => {
            state.user = payload.user
            state.token = payload.token
            state.toLoggedIn = true
        },
        [authOperations.logOut.fulfilled]: (state, _) => {
            state.user = { name: null, email: null }
            state.token = null
            state.toLoggedIn = false
        },
        [authOperations.getCurrentUser.fulfilled]: (state, { payload }) => {
            state.user = payload
            state.toLoggedIn = true
        }
    }
})

export default authSlice.reducer