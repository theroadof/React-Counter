import React from 'react'
import './App.css'
import Counter from './Components/Counter'
import CounterGroup from './Components/CounterGroup'
import { Provider } from 'react-redux'
import store from './store/index'
import CounterGroupContainer from './component_container/counter_group_container/CounterGroupContainer'

function App() {
	return (
        <Provider store={store}>
            <div className="App-header">
			    <CounterGroupContainer/>
            </div>
        </Provider>
	)
}

export default App
