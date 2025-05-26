import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/persons'


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

  const deleteButton = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .deletePerson(id)
        .then(() => setPersons(persons => persons.filter(p => p.id !== id)))
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const pers = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (pers && pers.phone !== "" && newPhone !== "") {
      if (window.confirm(`${newName} is already added to phonebook, do you want to replace the old number?`)) {
        const changed = {id: pers.id, name:pers.name, phone: newPhone }
        console.log(changed)
        personService
          .updatePhone(changed)
          .then(response => {
            setPersons(persons.map(person => person.id === pers.id ? response : person))
            setNewName('')
            setNewPhone('')
          })
      }
    }
    else {
      const person = {
        name: newName,
        phone: newPhone
      }
      personService.create(person)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
        })
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

  const fltr = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange3={handleChange3} filter={filter} />

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} handleChange={handleChange} handleChange2={handleChange2} newName={newName} newPhone={newPhone} />


      <h2>Numbers</h2>
      <Persons persons={fltr} deleteButton={deleteButton} />
    </div>
  )
}

export default App
