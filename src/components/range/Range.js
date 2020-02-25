import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import OutputValue from '../outputvalue/OutputValue'

// import styles from './styles'

import { INC, DEC, changeRange } from './rangeAction'

const rangeActions = { changeRange }

class Range extends Component {
  static propTypes = {
    range: PropTypes.number
  }
  constructor(props) {
    super(props)

    this.state = {
      range: 1
    }
  }

  increment = () => {
    this.props.changeRange(this.state.range, INC)
  }
  decrement = () => {
    this.props.changeRange(this.state.range, DEC)
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <input
          type="tel"
          value={this.state.range}
          onChange={e => this.setState({ range: e.target.value })}
        />
        <button onClick={this.increment}>+</button>
        <OutputValue text={'Seu contador é igual a: '} value={this.props.countRange} />
        {/* <p>Seu contador é: {this.props.countRange}</p> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.rangeReducer
})

const mapDispatchToProps = dispatch => bindActionCreators(rangeActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Range)
