
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import Links from '../links/Links'
import './Search.css'

function Search() {
  return (
    <>
        <Links/>
        <div className="page-wrapper"> 
            <input type="text" name="" id="" placeholder='Search ..' />
            <Link to="/"><FontAwesomeIcon icon={faSearch} /></Link>
        </div>
    </>
  )
}

export default Search