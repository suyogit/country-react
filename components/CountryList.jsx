import React from 'react'
import CountryCard from './CountryCard'
import CountriesData from '../data'
const CountryList = () => {

  return (
    <div className="country-cards">
     {CountriesData.map((country) => {
    return (
      <CountryCard 
        image={country?.flags?.svg} 
        key={country?.cca3} 
        name={country?.name?.common} 
        population={country?.population} 
        capital={country?.capital?.[0] || "N/A"} 
        region={country?.region}
      />
    )
  })}
    </div>
  )
}

export default CountryList
