import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fileApi from '../api/FileApi'

const initialState = {
  files: [],
}

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    fileAdded: (state, action) => {
      state.files = state.files.concat(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserFiles.fulfilled, (state, action) => {
      state.files = action.payload.data
    })
  },
})

export const getUserFiles = createAsyncThunk(
  'files/getUserFiles',
  async (id) => await fileApi.getCurrentUserFiles(id)
)

export const { fileDeleted, fileAdded } = filesSlice.actions

export default filesSlice.reducer
