import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const deletePerson = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const updatePhone = (changedPerson) => {
  const request = axios.put(`${baseUrl}/${changedPerson.id}`,changedPerson)
  return request.then(response => response.data)
}

export default {create,deletePerson,updatePhone}
