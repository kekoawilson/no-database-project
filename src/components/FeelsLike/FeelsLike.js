import React, { Component } from 'react';
import axios from 'axios';

class FeelsLike extends Component {
    constructor() {
        super()
        this.state = {
            currentData: ''
        }
        this.clicked = this.clicked.bind(this)
    }

    clicked() {
        let promise = axios.get('http://api.wunderground.com/api/17766f4fe9817542/conditions/q/UT/Provo.json')
        promise.then(res => {
            this.setState({
                currentData: res.data.current_observation.feelslike_f
            })
            this.props.updateCurrentWeather(res.data.current_observation.feelslike_f)
        }).catch(console.log)
    }


    render() {
        return (
            <div>
                <button className='feels-btn' onClick={this.clicked}>The Weather Feels Like: </button>
                <p>{this.state.currentData} °F</p>



            </div>
        )
    }

}

export default FeelsLike;