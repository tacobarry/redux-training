
export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    todo: {
      id: String(Math.random().toPrecision(13) * 10).split('.')[1],
      text,
      done: false
    }
  }
})

export const changeTodo = (todo) => ({
  type: 'CHANGE_TODO',
  payload: {
    todo
  }
})