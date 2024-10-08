import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        <div className="nav-child">
            <Link to="/">
                <h2 className="title">Where in the world?</h2>
            </Link>
        </div>
    </nav>
    </>
  )
}

export default Header