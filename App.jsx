import React, {useState} from "react";
import Header from './components/Header'
import './App.css'
import Search from './components/Search'
import Filter from './components/Filter'
import CountryList from './components/CountryList'

const App = () => {
  const [cdata, setcdata] = useState("")
  return (
    <>
    <Header/>
    <div className="middle">
      <Search update={setcdata}/>
      <Filter/>
    </div>
    <CountryList cdata={cdata}/>

    </>
  )
}
export default App