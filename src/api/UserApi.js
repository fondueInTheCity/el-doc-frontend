import axios from 'axios'

const baseURL = 'http://localhost:3000/api/users'

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

export { addNewUser }
