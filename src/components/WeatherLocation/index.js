import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = () => {
    return(   
            <div className="weatherDataCont">
                <Location city ={"Mexicali"} />
                <WeatherData/>
            </div>
    );
};

export default WeatherLocation;

