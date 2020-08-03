import React,{Component} from 'react';
import Counter from '../Counter';
import {inputNumber,totalPlus,totalMinus} from '../../store/actionCreators';
import store from '../../store';

class CounterGroup extends React.Component{
    constructor(props){
        super(props)
        this.setNumber = this.setNumber.bind(this)
        this.state = {
            number: 0,
            total: 0
        }
        store.subscribe(this.storeChange)
    }

    storeChange=()=>{
        this.setState(store.getState())
    }

    getCount=(result,number)=>{
        const action = totalPlus()
        store.dispatch(action)
    }

    getMinusCount=(result,number)=>{
        const action = totalMinus()
        store.dispatch(action)
    }

    setNumber(number){
        var value = Number(number.target.value)
        if(!isNaN(value)){
            const action = inputNumber(value)
            store.dispatch(action)
        }else{
            alert("error input!")
        }
    }

    render() {
        return(
            <div>
                Number Of Counters: <input type='text' onChange={this.setNumber} defaultValue={this.state.number}></input>
                <br/>
                <div>Total:{this.state.total}</div>
                {new Array(this.state.number).fill(0).map((value,index)=>(<Counter parent={this} key={index}/>))}

            </div>
        )
    }
}

export default CounterGroup;
