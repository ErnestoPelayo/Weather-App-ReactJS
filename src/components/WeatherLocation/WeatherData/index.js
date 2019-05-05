import React from 'react';
import Temperature from './WeatherTemperature';
import ExtraInfo from './ExtraInfo';
import {
    SUN,
} from '../../../constants/weathers';

const WeatherData = () => (
    <div>
        <h3>Informacion de Clima</h3>
        <Temperature 
            temperature = {25} 
            weatherState= { SUN }
        />
        <ExtraInfo humidity = {80}  wind = { "10 m/s"} />
    </div>
);

export default WeatherData;