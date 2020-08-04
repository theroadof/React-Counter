import counterReducer from './reducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    counterReducer
})

export default reducers;