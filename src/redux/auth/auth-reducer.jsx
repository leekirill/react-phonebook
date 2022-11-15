import { createSlice } from "@reduxjs/toolkit"
import * as authOperations from './auth-operations'

const initialState = {
    user: { name: null, email: null },
    token: null,
    toLoggedIn: false,
    isLoading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled]: (state, { payload }) => {
            state.user = payload.user
            state.token = payload.token
            state.toLoggedIn = true
            state.isLoading = false
        },
        [authOperations.logIn.fulfilled]: (state, { payload }) => {
            state.user = payload.user
            state.token = payload.token
            state.toLoggedIn = true
            state.isLoading = false
        },
        [authOperations.logOut.fulfilled]: (state, _) => {
            state.user = { name: null, email: null }
            state.token = null
            state.toLoggedIn = false
            state.isLoading = false
        },
        [authOperations.getCurrentUser.fulfilled]: (state, { payload }) => {
            state.user = payload
            state.toLoggedIn = true
            state.isLoading = false
        },
        [authOperations.register.pending]: (state, _) => {
            state.isLoading = true
        },
        [authOperations.logIn.pending]: (state, _) => {
            state.isLoading = true
        },
        [authOperations.logOut.pending]: (state, _) => {
            state.isLoading = true
        },
        [authOperations.getCurrentUser.pending]: (state, _) => {
            state.isLoading = true
        },
        [authOperations.register.rejected]: (state, _) => {
            state.isLoading = false
        },
        [authOperations.logIn.rejected]: (state, _) => {
            state.isLoading = false
        },
        [authOperations.logOut.rejected]: (state, _) => {
            state.isLoading = false
        },
        [authOperations.getCurrentUser.rejected]: (state, _) => {
            state.isLoading = false
        },
    }
})


export default authSlice.reducer