import React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Provider } from 'react-redux'

import TodoList from './TodoList'
import store from './store'

describe('TodoList Component', () => {
  it('TodoList should render correctly', () => {
    const app = shallow(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )

    expect(toJson(app)).toMatchSnapshot()
  })

  it('should render the todoList empty with input add', () => {
    const props = {
      todos: []
    }

    const app = mount(
      <Provider store={store}>
        <TodoList {...props} />
      </Provider>
    )

    expect(toJson(app)).toMatchSnapshot()
  })

  it('should render four todos', () => {
    const props = {
      todos: [
        'Finish course React-Redux of Cod3rs',
        'Finish the sensedia tech training of React-Redux',
        'Finish the tests of this project',
        'Study Styled-Components'
      ]
    }

    const app = mount(
      <Provider store={store}>
        <TodoList {...props} />
      </Provider>
    )

    expect(toJson(app)).toMatchSnapshot()
  })
})
