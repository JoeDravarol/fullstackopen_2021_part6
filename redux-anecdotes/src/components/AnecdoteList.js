import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

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

  const vote = (id) => {
    dispatch( voteAnecdote(id) )
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {orderedAnecdotes.map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => vote(anecdote.id)}
        />
      )}
    </div>
  )
}

export default AnecdoteList
