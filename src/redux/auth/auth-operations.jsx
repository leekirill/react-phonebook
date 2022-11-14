import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {  
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

const register = createAsyncThunk('auth/signup', 
    async credentials => {
        try {
            const { data } = await axios.post('/users/signup', credentials)
            token.set(data.token)
            return data 
        } catch (error) {
          console.error(error)  
        }
    }
)

const logIn = createAsyncThunk('auth/login', 
    async credentials => {
        try {
            const { data } = await axios.post('/users/login', credentials)
            token.set(data.token) 
            return data 
        } catch (error) {
          console.error(error)  
        }
    }
)

const logOut = createAsyncThunk('auth/logout', 
    async credentials => {
        token.unset()

        try {
            const { data } = await axios.post('/users/logout', credentials)
            return data 
        } catch (error) {
          console.error(error)  
        }
    }
)

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => { 

    const persistedToken = thunkAPI.getState().authReducer.token

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue()
    }

    token.set(persistedToken)

    try {
        const { data } = await axios.get('/users/current')
        return data 
    } catch (error) {
        console.error(error)
    }

 }
)


export { register, logIn, logOut, getCurrentUser }
