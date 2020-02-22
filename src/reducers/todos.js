
const INITIAL_STATE = []

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, action.payload.todo ]
    case 'REMOVE_TODO':
      return [ ...state.filter(elem => elem.todo !== action.payload.todo) ]
  
    default:
      return state
  }
}

export default todos