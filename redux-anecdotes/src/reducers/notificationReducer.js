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

export const setNotification = (message, timeInSecond) => {
  return async dispatch => {
    const timeInMillisecond = Math.floor(1000 * timeInSecond)

    dispatch({
      type: 'SET_NOTIFICATION',
      message
    })

    setTimeout(() => {
      dispatch({
        type: 'RESET_NOTIFICATION'
      })
    }, timeInMillisecond)
  }
}

export default reducer