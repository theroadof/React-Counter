import { connect } from "react-redux"
import CounterGroup from "../../Components/CounterGroup"
import { inputNumber, totalMinus, totalPlus } from '../../store/action/actionCreators'
import { bindActionCreators } from "redux"

const mapStateToProps = (state) => {
    return {
        number: state.number,
        total: state.total
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
        inputNumber: (number) => {
            bindActionCreators(inputNumber(number),dispatch) 
        },
        totalPlus: () => { bindActionCreators(totalPlus(),dispatch) },
        totalMinus: () => { bindActionCreators(totalMinus(),dispatch) }
    }
}

const CounterGroupContainer = connect(mapDispatchToProps, mapStateToProps)(CounterGroup)
export default CounterGroupContainer;
