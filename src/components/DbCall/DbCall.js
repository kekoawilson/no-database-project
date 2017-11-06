import React, { Component } from 'react';
import axios from 'axios';


class DbCall extends Component {
    constructor() {
        super()
        this.state = {
            data: {}
        }

        this.display = this.display.bind(this)
    }

    componentWillMount() {
        let promise = axios.get('http://localhost:3001/api/all')
        promise.then(res => {
            console.log(res)
            this.setState({
                data: res.data
            })
        }).catch(console.log)
    }

    display() {
        let weather = 1 * this.props.currentWeather
        console.log(weather)
        let apiData;

        if (weather <= 40) {
            apiData = this.state.data.cold;
            return (
                <div className='import'>
                    <p className='list'>{apiData.advice}</p>
                    <p className='list'>{apiData.top}</p>
                    <p className='list'>{apiData.bottom}</p>
                    <p className='list'>{apiData.shoes}</p>
                </div>
            )
        } else if (weather > 40 && weather <= 65) {
            apiData = this.state.data.cool
            return (
                <div className='import'>
                    <p className='list'>{apiData.advice}</p>
                    <p className='list'>{apiData.top}</p>
                    <p className='list'>{apiData.bottom}</p>
                    <p className='list'>{apiData.shoes}</p>
                </div>
            )
        } else if (weather > 65 && weather <= 80) {
            apiData = this.state.data.warm;
            return (
                <div className='import'>
                    <p className='list'>{apiData.advice}</p>
                    <p className='list'>{apiData.top}</p>
                    <p className='list'>{apiData.bottom}</p>
                    <p className='list'>{apiData.shoes}</p>
                </div>
            )
        } else if (weather > 80) {
            apiData = this.state.data.hot
            return (
                <div className='import'>
                    <p className='list'>{apiData.advice}</p>
                    <p className='list'>{apiData.top}</p>
                    <p className='list'>{apiData.bottom}</p>
                    <p className='list'>{apiData.shoes}</p>
                </div>
            )
        }
    }






    render() {

        return (

            <div className='outside-display'>
                <span className='button-span'><button className='wear-btn' onClick={this.display}> What To Wear </button></span>
                {
                    this.state.data.cold ?
                        this.display()

                        :

                        null
                }

            </div>
        )
    }

}


export default DbCall;