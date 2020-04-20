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
          <div style={styles.divContainerRow}>
            <div>
              <TodoList />
              <CounterTodos />
            </div>
            <div>
              <Range />
            </div>
            <div>
              <DemoBox />
              <ChangeTheme />
            </div>
          </div>
        </ThemeContainer>
      </Provider>
    )
  }
}

const styles = {
  divContainerRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  divContainerCol: {
    display: 'flex',
    flex:1,
    flexDirection: 'column'
  }
}

export default App
