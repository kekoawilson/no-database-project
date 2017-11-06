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
        this.addItem = this.addItem.bind(this)
        this.clearList = this.clearList.bind(this)
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    addItem() {
        this.setState({
            input: '',
            display: [...this.state.display, this.state.input]
        })
    }

    clearList(arr) {
        this.setState({
            display: []
        })
    }

    render() {
        let displayItems = this.state.display.map((e, i) => {
            return (
                    <DisplayList key={i} item={e} />
            )
        })
        return (
            <div>
                <h4>Packing List</h4>
                <div>
                    <input placeholder='What Are You Bringing?' onChange={this.handleChange} />

                    <button className='btn' onClick={this.addItem} > Add Item </button>
                    <button className='btn' onClick={this.clearList}> Clear List </button>
                </div>


                {displayItems}

            </div >
        )
    }

}

export default PackingList;