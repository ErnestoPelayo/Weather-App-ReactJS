import React  from 'react';
import Temperature from './WeatherTemperature';
import ExtraInfo from './ExtraInfo';
import PropTypes from 'prop-types';
import './styles.css'


const WeatherData = ({ data : {temperature,weatherState,humidity,wind} }) => {
    return (
        <div className="weatherDataCont">
        <Temperature 
            temperature = {temperature} 
            weatherState= { weatherState }
        />
        <ExtraInfo humidity = {humidity}  wind = { wind } />
    </div>
    );
};

WeatherData.prototypes = {
    data : PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity : PropTypes.number.isRequired,
        wind : PropTypes.string.isRequired,
    }),
}

export default WeatherData;