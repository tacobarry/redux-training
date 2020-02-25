import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as todoActions from './actions/todos'
import { styles } from './styles'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodoText: ''
    }
  }

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText)
    this.setState({ newTodoText: '' })
  }

  changeTodo = (todo) => {
    this.props.changeTodo(todo)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li
              key={todo.id}
              style={(todo.done) ? { ...styles.todo.done } : { }}
              onClick={() => this.changeTodo(todo)}
            >
              {todo.text}
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.newTodoText}
          onChange={(e) => this.setState({ newTodoText: e.target.value })}
        />
        <button onClick={this.addNewTodo}>Novo Item</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
