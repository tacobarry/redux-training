import React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Provider } from 'react-redux'
// import configureMockStore from 'redux-mock-store'
import store from '../../store'

import Range from './Range'
// const mockStore = configureMockStore([]);

describe('<Range>', () => {

  it('should be renderer', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Range />
      </Provider>)

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render the props correctly', () => {
    const component = mount(
      <Provider store={store}>
        <Range />
      </Provider>
    )

    expect(toJson(component)).toMatchSnapshot()
    component.unmount()
  })

  it('should be increment 3 into countRange', () => {
    const component = mount(
      <Provider store={store}>
        <Range countRange={1} />
      </Provider>
    )

    const { countRange } = store.getState().rangeReducer
    expect(toJson(component)).toMatchSnapshot()

    component.find('input').at(0).simulate('change', {
      target: {
        value: 3
      }
    })

    component.find('button').at(1).simulate('click')

    //console.log('countRange equals four', component.debug())
    expect(toJson(component)).toMatchSnapshot()
    expect(component.find('OutputValue').find('p').text()).toBe(`Seu contador é igual a: ${countRange + 3}`)

    component.unmount()
  })

  it('should be decrement 10', () => {

    const component = mount(
      <Provider store={store}>
        <Range countRange={1} />
      </Provider>
    )

    expect(toJson(component)).toMatchSnapshot()

    const { countRange } = store.getState().rangeReducer

    component.find('input').at(0).simulate('change', {
      target: {
        value: 10
      }
    })

    component.find('button').at(0).simulate('click')

    expect(toJson(component)).toMatchSnapshot()
    expect(component.find('OutputValue').find('p').text()).toBe(`Seu contador é igual a: ${countRange -10}`)

    component.unmount()
  })
})
