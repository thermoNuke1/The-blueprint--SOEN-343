import axios from 'axios'

const baseUrl = '/api/users' 
let token = null

const setToken = newToken => {  
  token = `Bearer ${newToken}`
}

const createUser = async (userData) => {
  const response = await axios.post(baseUrl, userData)
  return response.data
}

const getAllUsers = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getUserByUsername = async (username) => {

  const config = {    
    headers: { Authorization: token },  
}
  const response = await axios.get(`${baseUrl}/${username}`, config)
  return response.data
}

const updateUser = async (userData) => {
  const config = {    
    headers: { Authorization: token },  
}
  const response = await axios.put(baseUrl, userData, config)
  return response.data
}

export default { createUser, getAllUsers, updateUser, setToken, getUserByUsername }