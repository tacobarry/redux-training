import React from 'react'
import PropTypes from 'prop-types'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import OutputValue from './OutputValue'

describe('OutputValue Component', () => {
  it('OutputValue should render correctly', () => {
    const app = shallow(
      <OutputValue />
    )

    expect(toJson(app)).toMatchSnapshot()
  })

  it('should render any text and value = 0', () => {
    const props = {
      text: 'bla bla bla',
      value: 0
    }

    const app = mount(
      <OutputValue {...props} />
    )

    expect(toJson(app)).toMatchSnapshot()
  })

  it(`should render 'O numero de todos é igual a 4'`, () => {
    const props = {
      text: 'O número de todos é igual a',
      value: 4
    }

    const app = mount(
      <OutputValue {...props} />
    )

    expect(toJson(app)).toMatchSnapshot()
  })
})