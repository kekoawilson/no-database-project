import React, { Component } from 'react';
import DisplayList from './DisplayList'

class PackingList extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            display: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.clicked = this.clicked.bind(this)
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    clicked() {
        this.setState({
            input: '',
            display: [...this.state.display, this.state.input]
        })
    }


    render() {
        let displayItems = this.state.display.map((e, i) => {
            return <DisplayList key={i} item={e} />
        })
        return (
            <div>
                <h4>Packing List</h4>
                <div>
                    <input placeholder='What Are You Bringing?' onChange={this.handleChange} />

                    <button onClick={this.clicked}> Add Item </button>
                </div>


                {displayItems}

            </div >
        )
    }

}

export default PackingList;