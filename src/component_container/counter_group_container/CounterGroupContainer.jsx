import { connect } from "react-redux"
import CounterGroup from "../../Components/CounterGroup"
import { inputNumber, totalMinus, totalPlus } from '../../store/action/actionCreators'

const mapStateToProps = (state) => {
    return {
        number: state.counterReducer.number,
        total: state.counterReducer.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputNumber: (number) => (dispatch(inputNumber(number))),
        totalPlus: () => (dispatch(totalPlus())),
        totalMinus: () => (dispatch(totalMinus()))
    }
}

const CounterGroupContainer = connect(mapStateToProps, mapDispatchToProps)(CounterGroup)
export default CounterGroupContainer;
