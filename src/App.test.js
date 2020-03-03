import React from 'react'
// import default da biblioteca de teste do react
// import { render } from '@testing-library/react'
import App from './App'

// Imports da biblioteca de testes do enzyme
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

// TESTE DEFAULT do REACT
// test('renders learn react link', () => {
//   const { getByText } = render(<App />)
//   const linkElement = getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// });

describe('Testing App Component', () => {
  it('App should render correctly', () => {
    const app = shallow(
      <App />
    )

    expect(toJson(app)).toMatchSnapshot()
  })
})