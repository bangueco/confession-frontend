import axios from 'axios'

const baseURL = 'http://localhost:3001'

const getAll = () => {
  return axios.get(`${baseURL}/api/confessions`).then(response => response.data)
}

export default {
  getAll
}