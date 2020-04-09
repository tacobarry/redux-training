import React from 'react'
import styled from 'styled-components'
import { withTheme, ThemeProvider } from 'theming'
import { connect } from 'react-redux'

import theme from '../../../styles/ocean'

const Container = withTheme(
  styled.div`
    background: ${props => props.theme.backgroundColor ?
      props.theme.backgroundColor :
      '#fcfcfc'
    };
    color: ${props => props.theme.primaryColor};
    font-family: ${props => props.theme.fontFamily};
    flex: 1;
    min-height: 100vh;
    overflow: auto;
    padding: 1rem;
  `
)

const ThemeContainer = (props) => (
  <ThemeProvider theme={props.theme ? props.theme : theme}>
    <Container>
      {props.children}
    </Container>
  </ThemeProvider>
)

const mapStateToProps = state => ({ theme: state.theme.theme })

export default connect(mapStateToProps)(ThemeContainer)
