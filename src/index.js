import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(<App />, document.getElementById('root'))
