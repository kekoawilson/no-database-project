import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherButton from './components/WeatherButton/WeatherButton';
import PackingList from './components/PackingList/PackingList';
import ApiCall from './components/ApiCall/ApiCall';
import axios from 'axios';


class App extends Component {
  render() {
    return (
      <container>
        <link rel="stylesheet" href="bower_components/reset-css/reset.css" />
        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />

        <section className="top-section">

          <div className='t-div'>
            <CurrentWeather className='current-weather' />
          </div>

        </section>

        <section className='bottom-section'>

          <div className='l-top-div'>
            <WeatherButton className='weather-button' />
          </div>

          <div className='l-bottom-div'>
            <PackingList />
          </div>

          <div className='right-column'>
            <ApiCall />
          </div>

        </section>

      </container>
    );
  }
}

export default App;
