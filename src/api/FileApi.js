import axios from 'axios'

const baseURL = 'http://localhost:3000/api/files'

const uploadFile = (formData) => {
  axios.post(baseURL, formData).then((response) => {
    console.log(response)
  })
}

export { uploadFile }
