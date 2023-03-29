import axios from 'axios'

const baseURL = 'http://localhost:3000/api/files/'

const uploadFile = async (formData) => {
  return axios.post(baseURL, formData)
}

const getCurrentUserFiles = async (id) => {
  return axios.get(`${baseURL}users/${id}`)
}

const getFileInfoById = async (id) => {
  return axios.get(`${baseURL}${id}`)
}

const fileApi = { uploadFile, getCurrentUserFiles, getFileInfoById }
export default fileApi
