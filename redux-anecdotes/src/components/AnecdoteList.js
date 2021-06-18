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
  const anecdotes = useSelector(({ anecdotes, filterString }) => {
    const orderedByVotes = anecdotes.sort((a,b) => b.votes - a.votes)

    if (filterString.length === 0) return orderedByVotes

    return orderedByVotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filterString)
    )
  })
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch( voteAnecdote(anecdote) )
    dispatch( setNotification(`you voted '${anecdote.content}'`, 5) )
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
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
