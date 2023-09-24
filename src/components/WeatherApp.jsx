import React, { useState } from 'react'
import './WeatherApp.css'

import { Container } from '../styles/Background.jsx';
import clear_icon from '../images/clear_icon.png';
import cloud_icon from '../images/cloud_icon.png';
import drizzle_icon from '../images/drizzle_icon.png';
import humidity_icon from '../images/humidity_icon.png';
import rain_icon from '../images/rain_icon.png';
import snow_icon from '../images/snow_icon.png';
import wind_icon from '../images/wind_icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; 

export const WeatherApp = () => {

  let api_key = "599c3a74f4e10186d64b434f65a31b98"; //store OpenWeatherMap API key.

  const [wicon, setWicon] = useState(cloud_icon);

  //Function to location search
  const search = async () =>{
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value===""){ 
        return 0;
    }

    //fetch weather data from the OpenWeatherMap API
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    // update content with weather-related information obtained from the OpenWeatherMap API response.
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate"); 
    const temperate = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
    temperate[0].innerHTML = Math.floor(data.main.temp)+" °C";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
        setWicon(clear_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
        setWicon(cloud_icon);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
        setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
        setWicon(drizzle_icon);
    } 
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
        setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
        setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
        setWicon(snow_icon);
    }
    else{
        setWicon(clear_icon); 
    }
  }



  return (
    <Container>
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <FontAwesomeIcon icon={faSearch} className='custom-icon'/> 
                {<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />}
            </div>
        </div>

        <div className="weather-image">
            <img src={wicon} alt="" />
        </div>

        <div className="weather-temp">24°C</div>

        <div className="weather-location">Sri Lanka</div>

        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
        </div>
    </Container>
  )
}
