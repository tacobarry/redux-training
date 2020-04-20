import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as changeActions from './changeThemeAction'
import themes from '../../styles/index'

const themesArr = [ themes.ocean, themes.sunset ]

const ChangeTheme = props => {

  useEffect(() => {
    console.log('PROPS theme:', props.theme)
  }, [props.theme])

  const handleChangeTheme = () => {
    themesArr.forEach((elem, idx) => {
      if (props.theme.name === elem.name) {
        const themePos = (idx + 1) % themesArr.length
        props.switchTheme(themesArr[themePos])
      }
    })
  }

  const negativeTheme = () => {
    const negative = {
      ...props.theme,
      secondaryColor: props.theme.backgroundColor,
      backgroundColor: props.theme.secondaryColor
    }
    props.switchTheme(negative)
  }

  return (
    <div>
      <button
        onClick={handleChangeTheme}
      >Trocar Tema
      </button>

      <br />

      <button
        onClick={negativeTheme}
      >
        Inverter Tema
      </button>
    </div>
  )
}

const mapStateToProps = state => ({ theme: state.theme.theme })

const mapDispatchToProps = dispatch => bindActionCreators(changeActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTheme)
