import React, { Component } from 'react';
import axios from 'axios';

class Map extends Component {
    constructor() {
        super()
        this.state = {
            currentData: {}
        }
        this.componentWillMount = this.componentWillMount.bind(this)
    }

    componentWillMount() {
        let promise = axios.get('http://api.wunderground.com/api/17766f4fe9817542/conditions/q/UT/Orem.json')
        promise.then(res => {
            this.setState({
                currentData: res.data.current_observation
            }) 
            console.log(this.state)
        })
    }


    render() {
        return (
            <div>
            {this.state.currentData.feelslike_f}
            
            
            
            </div>
    )
    }

}

export default Map;