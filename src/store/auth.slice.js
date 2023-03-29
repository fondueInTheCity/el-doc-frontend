import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthApi from '../api/AuthApi'

const initialState = {
  entity: JSON.parse(localStorage.getItem('user')),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(action, state) {
      state.entity = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.entity = action.payload

      localStorage.setItem('user', JSON.stringify(action.payload))
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.entity = null
    })
  },
})

export const login = createAsyncThunk(
  'auth/login',
  async (authData) => await AuthApi.signIn(authData)
)

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('user')
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer
