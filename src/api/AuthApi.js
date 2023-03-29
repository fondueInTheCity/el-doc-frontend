import axios from 'axios'

const baseURL = 'http://localhost:3000/api/auth/'

const signIn = async (authData) => {
  return axios.post(`${baseURL}signin`, authData).then(handleResponse)
}

const handleResponse = async (response) => {
  const isJson = response.headers
    ?.get('content-type')
    ?.includes('application/json')
  const data = isJson ? await response.data : null

  return data
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const isAuthenticated = () => {
  return getCurrentUser() != null
}

const authApi = { signIn, logout, getCurrentUser, isAuthenticated }
export default authApi
