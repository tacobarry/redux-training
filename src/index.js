import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import App from './App'

// eslint-disable-next-line
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const GlobalStyle = createGlobalStyle`
  ${normalize}
`

const Root = () =>
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>

ReactDOM.render(<Root />, document.getElementById('root'))
