const reducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.message
    case 'RESET_NOTIFICATION':
      return null
    default:
      return state
  }
}

let timeoutId

export const setNotification = (message, timeInSecond) => {
  clearTimeout(timeoutId)

  return async dispatch => {
    const timeInMillisecond = Math.floor(1000 * timeInSecond)
      
    dispatch({
      type: 'SET_NOTIFICATION',
      message
    })

    timeoutId = setTimeout(() => {
      dispatch({
        type: 'RESET_NOTIFICATION'
      })
    }, timeInMillisecond)

  }
}

export default reducer