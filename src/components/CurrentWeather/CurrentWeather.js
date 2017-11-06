import React, { Component } from 'react';
import axios from 'axios';

class CurrentWeather extends Component {
    constructor() {
        super()
        this.state = {
            currentData: ''
        }
        this.componentWillMount = this.componentWillMount.bind(this)
    }

    componentWillMount() {
        let promise = axios.get('http://api.wunderground.com/api/17766f4fe9817542/conditions/q/UT/Provo.json')
        promise.then(res => {
            this.setState({
                currentData: res.data.current_observation.temp_f
            })
            console.log(this.state)
        })
    }


    render() {
        return (
            <div className='current-weather'>
                <h2>The Current Weather is: {this.state.currentData} °F</h2>



            </div>
        )
    }

}

export default CurrentWeather;