import { INC, DEC } from './rangeAction'

const INITIAL_STATE = {
  countRange: 0
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        countRange: state.countRange + Number(action.payload.range)
      }

    case DEC:
      return {
        ...state,
        countRange: state.countRange - action.payload.range
      }

    default:
      return state
  }
}

export default reducer
