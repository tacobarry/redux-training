import { combineReducers } from 'redux'

import todos from './todos'
import rangeReducer from '../components/range/rangeReducer'

export default combineReducers({
  todos,
  rangeReducer
})