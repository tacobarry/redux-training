import React from 'react'
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'

import { changeRange } from './rangeAction'

describe('RangeAction Tests', () => {
  const mockStore = configureMockStore()
  const store = mockStore({ range: 1, countRange: 1 })

  it('RangeAction should dispatch INC correctly', () => {
    store.dispatch(changeRange(3, 'INC'))

    expect(store.getActions()).toMatchSnapshot()
  })

  it('RangeAction should dispatch DEC correctly', () => {
    store.dispatch(changeRange(10, 'DEC'))

    expect(store.getActions()).toMatchSnapshot()
  })

})
