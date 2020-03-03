import React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Provider } from 'react-redux'

import Range from './Range'
import store from '../../store'

describe('Range Component', () => {
  it('Range should render correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <Range />
      </Provider>
    )

    expect(toJson(component)).toMatchSnapshot()
  })

  it('should countRange equals 0', () => {
    const props = {
      range: 1,
      countRange: 0
    }

    const component = mount(
      <Provider store={store}>
        <Range {...props} />
      </Provider>
    )

    expect(toJson(component)).toMatchSnapshot()
  })

  it('should increment 3', () => {
    const props = {
      range: 1,
      countRange: 1
    }

    const component = mount(
      <Provider store={store}>
        <Range {...props} />
      </Provider>
    )

    component.find('input').first().simulate('change', {
      target: {
        value: 3
      }
    })

    component.find('button').last().simulate('click')

    expect(toJson(component)).toMatchSnapshot()
  })

  it('should decrement 10', () => {
    const props = {
      range: 1,
      countRange: 1
    }

    const component = mount(
      <Provider store={store}>
        <Range {...props} />
      </Provider>
    )

    component.find('input').first().simulate('change', {
      target: {
        value: -10
      }
    })

    component.find('button').first().simulate('click')

    expect(toJson(component)).toMatchSnapshot()
  })
})
