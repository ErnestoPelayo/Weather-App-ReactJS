import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
} from '../../constants/weathers';

const location = "Mexicali, MX"
const api_key = '7f05b9413f850e901cd9f54018053c1d';
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data =  {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind : "10 m/s",

}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city : "Mexicali",
            data : data,
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather)

    }

    render(){
        const {city, data} = this.state
        return(
            <div className="weatherLocationCont">
                <Location city ={city} />
                <WeatherData data={ data } />
                <button onClick={this.handleUpdateClick}>Actualizar</button>

            </div>
        );
    }
}

export default WeatherLocation;

