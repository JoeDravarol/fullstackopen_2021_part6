const reducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.data
    default:
      return state
  }
}

export const filterChange = (string) => {
  return {
    type: 'SET_FILTER',
    data: string.toLowerCase()
  }
}

export default reducer