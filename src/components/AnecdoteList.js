import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVote } from '../reducers/anecdoteReducer'
import { setNotif } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, vote }) => {
  return(
    <div>
      <div>{anecdote.content}</div>
      <div>
            has {anecdote.votes}
        <button onClick={vote}>vote</button>
      </div>
    </div>
  )
}


const Anecdotes = () => {
  const dispatch = useDispatch()
  let anecdotes = useSelector(state => state.anecdotes)
  let filter = useSelector(state => state.filter)

  if (filter !== null) {
    anecdotes = anecdotes.filter(anec => anec.content.toUpperCase().includes(filter.toUpperCase()))
  }


  return(
    <div>
      {anecdotes.slice().sort((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          vote={() => dispatch(setVote(anecdote), dispatch(setNotif(`you voted '${anecdote.content}`, 5)))}
        />
      )}
    </div>
  )
}

export default Anecdotes