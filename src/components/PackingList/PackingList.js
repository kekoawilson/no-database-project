import React, { Component } from 'react';

class PackingList extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            display: []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }


    render() {
        let displayItems = this.state.display.map((e, i) => {
            return  <h3 key={i}> {e} </h3>
        })
        return (
            <div>
                <input placeholder='What Are You Bringing?' onChange={this.handleChange} />
                
                {displayItems}



            </div>
        )
    }

}

export default PackingList;