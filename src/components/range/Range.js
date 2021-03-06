import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import OutputValue from '../utils/outputvalue/OutputValue'
import If from '../utils/if/If'

import { INC, DEC, changeRange } from './rangeAction'

const rangeActions = { changeRange }

class Range extends Component {
  static propTypes = {
    range: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
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
        <If show={true}>
          <OutputValue text={'Seu contador é igual a:'} value={this.props.countRange} />
        </If>
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
