import {
    INPUT_NUMBER_OF_COUNTER,
    TOTAL_MINUS_1,
    TOTAL_PLUS_1,
} from '../actionType/actionTypes'

const defaultState = {
    number: 0,
    total: 0,
}
export default (state = defaultState, action) => {
    if (action.type === INPUT_NUMBER_OF_COUNTER) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.number = action.value
        newState.total = 0
        return newState
    }
    if (action.type === TOTAL_PLUS_1) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.total = newState.total + 1
        return newState
    }
    if (action.type === TOTAL_MINUS_1) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.total = newState.total - 1
        return newState
    }
}