import React, { Component } from 'react';
import axios from 'axios';


class ApiCall extends Component {
    constructor() {
        super()
        this.state = {
            obj: {}
        }
        this.getInfo = this.getInfo.bind(this)
    }

    getInfo() {
        let promise = axios.get('http://localhost:3001/api/all')
        promise.then(res => {
            this.setState({
                obj: res.cold
            })
        }).catch(console.log)


    }

    render() {

        return (
            <div>
                <button className='weather-btn' onClick={this.getInfo}> What To Wear </button>


            </div>
        )
    }

}

export default ApiCall;