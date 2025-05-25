import { useState,useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName) || persons.some(person => person.phone === newPhone)) {
      alert(`${newName} or ${newPhone} is already added to phonebook`)

    }
    else {
      const person = {
        name: newName,
        phone: newPhone}
      setPersons(persons.concat(person))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleChange2 = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }
   const handleChange3 = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const fltr = persons.filter((person)=>person.name.toLowerCase().includes(filter.toLowerCase()))   

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange3={handleChange3} filter={filter}/>

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} handleChange = {handleChange} handleChange2={handleChange2} newName={newName} newPhone={newPhone}/>
     
     
      <h2>Numbers</h2>
      <Persons persons={fltr} />
    </div>
  )
}

export default App
