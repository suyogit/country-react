import React from 'react'
import React, {useState} from "react";
import Search from './Search'
import Filter from './Filter'
import CountryList from './CountryList'


const home = () => {
    const [cdata, setcdata] = useState("")
  return (
    <>
    <div className="middle">
    <Search update={setcdata}/>
    <Filter/>
  </div>
  <CountryList cdata={cdata}/>
  </>
  )
}

export default home