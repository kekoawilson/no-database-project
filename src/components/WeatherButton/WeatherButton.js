import React, { Component } from 'react';
import axios from 'axios';

class WeatherButton extends Component {
    constructor() {
        super()
        this.state = {
            currentData: ''
        }
        // this.clicked = this.clicked.bind(this)
    }

    // clicked() {
    //     let promise = axios.get('http://api.wunderground.com/api/17766f4fe9817542/conditions/q/UT/Orem.json')
    //     promise.then(res => {
    //         this.setState({
    //             currentData: res.data.current_observation
    //         }) 
    //         console.log(this.state)
    //     })
    // }


    render() {
        return (
            <div>
                <button className='feels-btn' onClick={this.clicked}>The Weather Feels Like: </button>
                <p>{this.state.currentData.feelslike_f} °F</p>



            </div>
        )
    }

}

export default WeatherButton;