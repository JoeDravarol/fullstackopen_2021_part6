import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const orderedAnecdotes = useSelector(({ anecdotes }) => 
    anecdotes.sort((a,b) => b.votes - a.votes)
  )
  const dispatch = useDispatch()

  const vote = ({ content, id}) => {
    dispatch( voteAnecdote(id) )

    dispatch( setNotification(`you voted '${content}'`) )
    setTimeout(() => {
      dispatch( resetNotification() )
    }, 5000)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {orderedAnecdotes.map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => vote(anecdote)}
        />
      )}
    </div>
  )
}

export default AnecdoteList
