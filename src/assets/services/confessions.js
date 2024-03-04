import axios from 'axios'

const baseURL = '/api/confessions'

const getAll = () => {
  return axios.get(`${baseURL}`).then(response => response.data)
}

const sendConfession = (msg) => {
  const confessionObj = { message: msg }
  return axios.post(`${baseURL}`, confessionObj).then(response => response.data)
}

export default {
  getAll,
  sendConfession
}