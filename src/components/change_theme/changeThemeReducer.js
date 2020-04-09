import defaultTheme from '../../styles/ocean'

import { CHANGE_THEME } from './changeThemeAction'

const INITIAL_STATE = { theme: defaultTheme }

const changeThemeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      }

    default:
      return state
  }
}

export default changeThemeReducer
