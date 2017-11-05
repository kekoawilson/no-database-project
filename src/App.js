import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherButton from './components/WeatherButton/WeatherButton';
import PackingList from './components/PackingList/PackingList';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrentWeather />
        <WeatherButton />
        <PackingList />
      </div>
    );
  }
}

export default App;
