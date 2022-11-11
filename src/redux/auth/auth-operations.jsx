import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const signup = createAsyncThunk('​/auth/signup', 
    async credentials => {
        try {
            const { data } = axios.post('​/users​/signup', credentials)
            console.log(data)
            return data 
        } catch (error) {
          console.error(error)  
        }
    }
)