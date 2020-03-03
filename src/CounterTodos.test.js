import React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Provider } from 'react-redux'

import CounterTodos from './CounterTodos'
import store from './store'

describe('CounterTodos Component', () => {
  it('CounterTodos should render correctly', () => {
    const app = shallow(
      <Provider store={store}>
        <CounterTodos />
      </Provider>
    )

    expect(toJson(app)).toMatchSnapshot()
  })

  it(`should render 'Voce tem 0 todos.'`, () => {
    const props = {
      todos: []
    }

    const app = mount(
      <Provider store={store}>
        <CounterTodos/>
      </Provider>
    )

    expect(toJson(app)).toMatchSnapshot()
  })

  it(`should render 'Voce tem 4 todos.'`, () => {
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
        <CounterTodos/>
      </Provider>
    )

    expect(toJson(app)).toMatchSnapshot()
  })
})
