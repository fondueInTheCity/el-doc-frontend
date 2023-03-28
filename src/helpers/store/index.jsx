import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth.slice'
import filesReducer from './files.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    files: filesReducer,
  },
})
