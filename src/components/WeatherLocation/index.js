import React,{Component} from 'react';
import transformWeather from './../services/transformWeather';
import {api_weather} from './../constans/api_urls';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN, WINDY,
} from '../../constants/weathers';

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

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        
    }
    
    

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve =>{
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data:newWeather
            });
        });
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

