import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import FeelsLike from './components/FeelsLike/FeelsLike';
import PackingList from './components/PackingList/PackingList';
import DbCall from './components/DbCall/DbCall';



class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: undefined
    }
    this.updateCurrentWeather = this.updateCurrentWeather.bind(this)
  }

  updateCurrentWeather(num) {
    this.setState({
      currentWeather: num * 1
    })
  }

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
            <FeelsLike className='weather-button' updateCurrentWeather={this.updateCurrentWeather} />
          </div>

          <div className='l-bottom-div'>
            <PackingList />
          </div>

          <div className='right-column'>
            <DbCall currentWeather={this.state.currentWeather} />
          </div>

        </section>

      </container>
    );
  }
}

export default App;
