import React, { Component } from 'react'
import Counter from '../Counter'
import { inputNumber, totalPlus, totalMinus } from '../../store/actionCreators'
import store from '../../store'

class CounterGroup extends React.Component {
	constructor(props) {
		super(props)
		this.setNumber = this.setNumber.bind(this)
		this.state = {
			number: 0,
			total: 0,
			counters: [],
		}
		store.subscribe(this.storeChange)
	}

	storeChange = () => {
		this.setState(store.getState())
	}

	getCount = (result, number) => {
		const action = totalPlus()
		store.dispatch(action)
	}

	getMinusCount = (result, number) => {
		const action = totalMinus()
		store.dispatch(action)
	}

	setNumber(number) {
		var value = Number(number.target.value)
		if (!isNaN(value)) {
			const action = inputNumber(value)
			store.dispatch(action)
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

	render() {
		return (
			<div>
				Number Of Counters:{' '}
				<input
					type="text"
					onChange={this.setNumber}
					defaultValue={this.state.number}
				></input>
				<br />
				<div>Total:{this.state.total}</div>
				{this.state.counters}
			</div>
		)
	}
}

export default CounterGroup
