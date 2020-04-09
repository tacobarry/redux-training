import { combineReducers } from 'redux'

import todos from './todos'
import rangeReducer from '../components/range/rangeReducer'
import ChangeThemeReducer from '../components/change_theme/changeThemeReducer'

const rootReducer =  combineReducers({
  todos,
  rangeReducer,
  theme: ChangeThemeReducer
})

export default rootReducer
