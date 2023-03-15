import axios from 'axios'

const API_URL = 'http://localhost:3000/api/auth/'

const signUp = (userInfo) => {
  return axios.post(API_URL + 'signup', userInfo)
}

const signIn = (signInState) => {
  return axios.post(API_URL + 'signin', signInState).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
  })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const AuthService = {
  signUp,
  signIn,
  logout,
  getCurrentUser,
}

export default AuthService
