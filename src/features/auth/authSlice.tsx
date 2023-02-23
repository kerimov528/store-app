import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { LoginInputs, RegisterInputs } from '../../types'
import { RootState } from '../../app/store'

const initialState = {
    email: '',
    password: '',
    username: '',
    loading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
}

export const signupUser = createAsyncThunk(
    'users/signup',
    async ({ username, email, password }: RegisterInputs, thunkAPI) => {
        try {
            const payload = { username, email, password }

            const response = await axios.post('https://fakestoreapi.com/users', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            const data: any = await response.data
            

            if (response.status === 200) {
                localStorage.setItem('token', data.token);

                return { ...data, username: username, email: email };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e: any) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

export const loginUser = createAsyncThunk(
    'users/login',
    async ({ username, password }: LoginInputs, thunkAPI) => {
        try {
            const payload = { username, password }
            const result = await axios.post(
                'https://fakestoreapi.com/auth/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }
            )

            

            // if (result.status === 200) {
            //     localStorage.setItem('token', result.token);
            //     return result;
            // } else {
            //     return thunkAPI.rejectWithValue(result);
            // }
        } catch (e: any) {
            console.log('Error', e.response.result);
            thunkAPI.rejectWithValue(e.response.result);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false
            state.loading = false
            state.isSuccess = false
            state.email = ''
            state.password = ''
            state.username = ''
            return state
        }
    },
    extraReducers: (builder) => {

        // Signup 
        builder.addCase(signupUser.pending, (state) => {
            state.loading = true
        })

        builder.addCase(signupUser.fulfilled, (state, { payload }) => {
            
            state.email = payload.email
            state.password = payload.password
            state.username = payload.username
            state.loading = false
        })

        builder.addCase(signupUser.rejected, (state, { payload }) => {
            
            state.loading = false
            // state.errorMessage = payload.message
        })

        // Login 

        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
        })

        builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            
            // state.password = payload
            // state.username = payload
            state.loading = false

            return state
        })

        builder.addCase(loginUser.rejected, (state, { payload }) => {
            
            state.loading = false
            state.isError = true
            // state.errorMessage = payload.message
        })
    }
})

export default authSlice.reducer
export const { clearState } = authSlice.actions
export const userSelector = (state: RootState) => state.auth
