import React from 'react'
import styled from 'styled-components'
import { withTheme, ThemeProvider } from 'theming'
import { connect } from 'react-redux'

import theme from '../../../styles/ocean'

const Container = withTheme(
  styled.div`
    height: 100%;
    min-height: 100vh;
    background: ${props => props.theme.backgroundColor ?
      props.theme.backgroundColor :
      '#fcfcfc'
    };
    color: ${props => props.theme.primaryColor};
    font-family: ${props => props.theme.fontFamily};
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  `
)

const ThemeContainer = (props) => (
  // TODO: Get theme from localStorage;
  <ThemeProvider theme={props.theme ? props.theme : theme}>
    <Container>
      {props.children}
    </Container>
  </ThemeProvider>
)

const mapStateToProps = state => ({ theme: state.theme.theme })

export default connect(mapStateToProps)(ThemeContainer)
