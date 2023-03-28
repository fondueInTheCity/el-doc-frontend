import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchWrapper } from '../fetch-wrapper'
import { getUserInfo } from '../../api/UserApi'

const name = 'auth'
const initialState = createInitialState()
const reducers = createReducers()
const extraActions = createExtraActions()
const slice = createSlice({ name, initialState, reducers })

export const authActions = { ...slice.actions, ...extraActions }
export const authReducer = slice.reducer

// eslint-disable-next-line no-unused-vars
export async function fetchTodos(dispatch, getState) {
  const response = await getUserInfo(1)
  console.log(response)
  // dispatch({ type: 'auth/user', payload: response })
}

function createInitialState() {
  return {
    value: JSON.parse(localStorage.getItem('user')),
  }
}

function createReducers() {
  return {
    setAuth,
  }

  function setAuth(state, action) {
    state.value = action.payload
  }
}

function createExtraActions() {
  const baseUrl = 'http://localhost:3000/api/auth'

  return {
    login: login(),
    logout: logout(),
  }

  function login() {
    return createAsyncThunk(
      `${name}/login`,
      async function ({ username, password }, { dispatch }) {
        const user = await fetchWrapper.post(`${baseUrl}/signin`, {
          username,
          password,
        })

        dispatch(authActions.setAuth(user))

        localStorage.setItem('user', JSON.stringify(user))
      }
    )
  }

  function logout() {
    return createAsyncThunk(`${name}/logout`, function (arg, { dispatch }) {
      dispatch(authActions.setAuth(null))
      localStorage.removeItem('user')
    })
  }
}
