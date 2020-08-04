import {
    INPUT_NUMBER_OF_COUNTER,
    TOTAL_MINUS_1,
    TOTAL_PLUS_1,
} from '../actionType/actionTypes'

const defaultState = {
    number: 0,
    total: 0,
}
export default function counterReducer(state = defaultState, action) {
    if (action.type === INPUT_NUMBER_OF_COUNTER) {
        return {
            number: action.value,
            total: 0
        }
    }
    if (action.type === TOTAL_PLUS_1) {
        return {
            total: state.total + 1
        }
    }
    if (action.type === TOTAL_MINUS_1) {
        return {
            total: state.total - 1
        }
    }
    return state
}