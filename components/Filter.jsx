import React from 'react'

const Filter = () => {
  return (
    <select name="country" id="continent-names" className="filter">   
    <option value="" hidden="">Filter by region</option>
    <option value="Africa">Africa</option>
    <option value="America">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
</select>
  )
}

export default Filter