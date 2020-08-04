import React, { Component } from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.setNumber = this.setNumber.bind(this)
        this.state = {
            number: 0,
            total: 0,
            counters: []
        }
    }

    getCount = () => {
        this.props.totalPlus()
    }

    getMinusCount = () => {
        this.props.totalMinus()
    }

    setNumber (number) {
        var value = Number(number.target.value)
        if (!isNaN(value)) {
            this.props.inputNumber(value)
            this.setState({
                counters: new Array(value)
                    .fill(0)
                    .map((value, index) => (
                        <Counter number={0} parent={this} key={index} />
                    )),
            })
        } else {
            alert('error input!')
        }
    }

    render () {
        return (
            <div>
                Number Of Counters:{' '}
                <input
                    type="text"
                    onChange={this.setNumber}
                    defaultValue={this.state.number}
                ></input>
                <br />
                <div>Total:{this.props.total}</div>
                {this.state.counters}
            </div>
        )
    }
}

export default CounterGroup
