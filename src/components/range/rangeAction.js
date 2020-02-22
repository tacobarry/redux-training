export const INC = 'INC'
export const DEC = 'DEC'

export const changeRange = (range = 1, changeType) => ({
  type: changeType,
  payload: {
    range
  }
})