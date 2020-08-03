import {
	INPUT_NUMBER_OF_COUNTER,
	TOTAL_PLUS_1,
	TOTAL_MINUS_1,
} from './actionTypes'

export const inputNumber = (value) => ({
	type: INPUT_NUMBER_OF_COUNTER,
	value,
})

export const totalPlus = () => ({
	type: TOTAL_PLUS_1,
})

export const totalMinus = () => ({
	type: TOTAL_MINUS_1,
})
