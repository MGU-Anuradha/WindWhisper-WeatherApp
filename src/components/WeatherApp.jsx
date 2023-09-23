import React from 'react'
import './WeatherApp.css'
import search from '../images/image1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; 

export const WeatherApp = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search City'/>
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} className='custom-icon'/> 
                {<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />}
            </div>
        </div>
    </div>
  )
}
