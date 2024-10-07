import React from 'react'
import Header from './components/Header'
import './App.css'
import Search from './components/Search'
import Filter from './components/Filter'
import CountryList from './components/CountryList'

const App = () => {
  return (
    <>
    <Header/>
    <div className="middle">
      <Search/>
      <Filter/>
    </div>
    <CountryList/>

    </>
  )
}

export default App