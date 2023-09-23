import React from 'react'
import './WeatherApp.css'
import search from '../images/image1.jpg';


export const WeatherApp = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search City'/>
            <div className="search-icon">
                <img src={search} alt="" />
            </div>
        </div>
    </div>
  )
}
