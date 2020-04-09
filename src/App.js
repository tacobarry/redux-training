import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'

import TodoList from './TodoList'
import CounterTodos from './CounterTodos'
import Range from './components/range/Range'
import DemoBox from './components/utils/demobox/Demobox'
import ChangeTheme from './components/change_theme/ChangeTheme'
import ThemeContainer from './components/utils/themecontainer'

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <ThemeContainer>
          <div>
            <TodoList />
            <CounterTodos />
          </div>
          <div>
            <Range />
            <DemoBox />
            <ChangeTheme />
          </div>
        </ThemeContainer>
      </Provider>
    )
  }
}

export default App
