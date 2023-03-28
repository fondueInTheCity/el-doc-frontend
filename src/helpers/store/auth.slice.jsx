import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signIn } from '../../api/AuthApi'

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
      console.log(state)
    })
  },
})

export const login = createAsyncThunk(
  'auth/login',
  async (authData) => await signIn(authData)
)

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('user')
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer
