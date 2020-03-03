import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const CounterTodos = props => (
  <h2>Voce tem {props.todos.length} todos.</h2>
)

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(CounterTodos)

CounterTodos.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number
}
