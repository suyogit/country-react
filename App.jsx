import React from 'react'
import Header from './components/Header'
import './App.css'
import Search from './components/Search'
import Filter from './components/Filter'

const App = () => {
  return (
    <>
    <Header/>
    <div className="middle">
      <Search/>
      <Filter/>
    </div>

    </>
  )
}

export default App