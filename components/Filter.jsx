import React from 'react'

const Filter = ({update}) => {
  return (
    <select name="country" id="continent-names" className="filter" onChange={(e)=>update(e.target.value.toLocaleLowerCase())}>   
    <option value="" hidden>Filter by region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
</select>
  )
}

export default Filter