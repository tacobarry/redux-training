export const CHANGE_THEME = 'CHANGE_THEME'

export const switchTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme
  }
}
