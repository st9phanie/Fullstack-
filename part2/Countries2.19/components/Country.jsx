import { useState } from 'react'

const Country = ({ filteredCountries, shownCountry, toggleShow}) => {

    const show = (country) => {
        return (
            <div>
                <h2>{country.name}</h2>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area} km²</p>
                <h3>Languages</h3>
                <ul>
                    {Object.values(country.languages).map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
                <img src={country.flag} />
            </div>
        )
    }

    if (filteredCountries.length === 0) {
        return null;
    }
    if (filteredCountries.length === 1) {
        return show(filteredCountries[0])

    }
    
    return (
        <div>
            {filteredCountries.map((country, index) => (
                <div key={index}>
                    <p >
                        {country.name}</p>
                    <button onClick={() => toggleShow(country)}>Show </button>
                </div>
            ))}

            <div>
                {shownCountry && show(shownCountry)}
            </div>
        </div>
    );
}

export default Country
