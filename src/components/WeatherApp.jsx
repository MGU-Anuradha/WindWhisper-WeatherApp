import React from 'react'
import './WeatherApp.css'
import mainImage from '../images/image1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; 

export const WeatherApp = () => {

    let api_key = "599c3a74f4e10186d64b434f65a31b98";

  return (
    <div className='container'>

        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search City'/>
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} className='custom-icon'/> 
                {<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />}
            </div>
        </div>

        <div className="weather-image">
            <img src={mainImage} alt="" />
        </div>

        <div className="weather-temp">24°C</div>

        <div className="weather-location">Sri Lanka</div>

        <div className="data-container">
            <div className="element">
                <img src="" alt="" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src="" alt="" />
                <div className="data">
                    <div className="humidity-percent">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

    </div>
  )
}
