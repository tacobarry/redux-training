import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'

import TodoList from './TodoList'
import CounterTodos from './CounterTodos'
import Range from './components/range/Range'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList />
          <CounterTodos />
        </div>
        <div>
          <Range />
        </div>
      </Provider>
    )
  }
}

export default App
