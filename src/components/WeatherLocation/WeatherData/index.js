import React from 'react';
import Temperature from './WeatherTemperature';
import ExtraInfo from './ExtraInfo';
import {
    SUN,
} from '../../../constants/weathers';
import './styles.css'

const WeatherData = () => (
    <div className="weatherDataCont">
        <Temperature 
            temperature = {25} 
            weatherState= { SUN }
        />
        <ExtraInfo humidity = {80}  wind = { "10 m/s"} />
    </div>
);

export default WeatherData;