import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'INCREMENT_VOTES':
      const id = action.data.id
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : action.data.changedAnecdote
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}


export const voteAnecdote = anecdote => {
  return async dispatch => {
    const id = anecdote.id
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const returnedAnecdote = await anecdoteService.update(updatedAnecdote, id)
    dispatch({
      type: 'INCREMENT_VOTES',
      data: {
        id: id,
        changedAnecdote: returnedAnecdote
      }
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer