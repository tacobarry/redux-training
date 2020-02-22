import React from 'react'
import { connect } from 'react-redux'

const CounterTodos = props => (
  <h2>Voce tem {props.todos.length} todos.</h2>
)

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(CounterTodos)
