import React from 'react';
import logo from './logo.svg';
import WeatherLocation from './components/WeatherLocation'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WeatherLocation/>
      </header>
    </div>
  );
}

export default App;
