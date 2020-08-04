import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.number != null) {
            this.setState({
                number: nextProps.number,
            })
        }
    }

    increase = () => {
        this.setState((preState) => ({ number: preState.number + 1 }))
        this.props.parent.getCount()
    }

    decrease = () => {
        this.setState({
            number: this.state.number - 1,
        })
        this.props.parent.getMinusCount()
    }

    render () {
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}

export default Counter
