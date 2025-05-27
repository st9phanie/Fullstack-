import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Country from './components/Country'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([]) 
  const [filteredCountries, setFilteredCountries] = useState([])
  const [errorMessage, setErrorMessage] = useState('') 
  const [showCountry, setShowCountry] = useState("")

  const toggleShow = (country) => {
    setShowCountry(country)
  }

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (search.length !== 0) {
          setShowCountry("")

      const filtered = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )

      if (filtered.length > 10) {
        setErrorMessage('Too many matches, specify another filter')
            setShowCountry("")

        setFilteredCountries([])
        setTimeout(() => {
          setErrorMessage('')
        }, 2000)

      } else if (filtered.length === 1) {
        const country = {
          name: filtered[0].name.common,
          capital: filtered[0].capital,
          area: filtered[0].area,
          languages: filtered[0].languages,
          flag: filtered[0].flags.png
        }
        setFilteredCountries([country])
        setErrorMessage('')
            setShowCountry("")


      } else {
        const countryList = filtered.map(country => ({
          name: country.name.common,
          capital: country.capital,
          area: country.area,
          languages: country.languages,
          flag: country.flags.png
        }))
        setFilteredCountries(countryList)
        setErrorMessage('')
      }
    } else {
      setFilteredCountries([])
    }
  }, [search, countries])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }


  return (
    <div>
      <Filter value={search} onChange={handleChange} />
      <Notification message={errorMessage} />
      <Country filteredCountries={filteredCountries} toggleShow={toggleShow} shownCountry={showCountry}/>
    </div>
  )
}

export default App
