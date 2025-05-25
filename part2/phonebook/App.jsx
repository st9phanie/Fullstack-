import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

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
