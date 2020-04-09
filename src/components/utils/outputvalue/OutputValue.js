import React from 'react'
import PropTypes from 'prop-types'

const OutputValue = ({text, value}) => (
  <div>
    <p>{text} {value}</p>
  </div>
)

export default OutputValue

OutputValue.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number
}