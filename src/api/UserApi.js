import axios from 'axios'

const baseURL = 'http://localhost:3000/api/users/'

const addNewUser = (uid, name, email) => {
  axios
    .post(baseURL, {
      uid: uid,
      name: name,
      email: email,
    })
    .then((response) => {
      console.log(response)
    })
}

const getUserInfo = (id) => {
  return axios.get(`${baseURL}${id}`)
}

const updateUserInfo = (userInfo) => {
  axios.post(baseURL, userInfo).then((response) => {
    console.log(response)
  })
}

const userApi = { addNewUser, getUserInfo, updateUserInfo }
export default userApi
