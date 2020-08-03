import INPUT_NUMBER_OF_COUNTER from './actionTypes'

const defaultState = {number:0,total:0} 
export default (state = defaultState,action)=>{
    if(action.type === INPUT_NUMBER_OF_COUNTER){
        let newState = JSON.parse(JSON.stringify(state))
        newState.number = action.value
        return newState
    }
}