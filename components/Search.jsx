import React from 'react'

const Search = ({update}) => {
  return (
    <div className="search">
            <div className ="inputsearch">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search Country ....."
                 onChange=
                 {(e)=>update(e.target.value.toLowerCase())
  }/>
            </div>
        </div>
  )
}

export default Search