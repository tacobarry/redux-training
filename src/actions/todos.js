
export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    todo: {
      id: Math.random()*10 + '' + Math.random()*10 + '' + Math.random()*10 + '' + Math.random()*10 + '' + Math.random()*10,
      text
    }
  }
})
