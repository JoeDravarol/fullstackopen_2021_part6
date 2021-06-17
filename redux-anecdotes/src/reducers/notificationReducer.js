const initialState = null

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.message
    case 'RESET_NOTIFICATION':
      return null
    default:
      return state
  }
}

export const setNotification = (message) => {
  return {
    type: 'SET_NOTIFICATION',
    message
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION'
  }
}

export default reducer