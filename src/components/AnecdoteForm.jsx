import React from 'react'
import { connect } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
import { setNotif } from '../reducers/notificationReducer'

const NewAnec = (props) => {

  const addAnec = async (event) => {
    event.preventDefault()
    const content = event.target.anec.value
    event.target.anec.value = ''
    props.createAnec(content)
    props.setNotif(`new anecdote '${content}'`,5)
  }

  return (
    <div>
      <h1>create new</h1>
      <form onSubmit={addAnec}>
        <div><input name="anec" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAnec: (value) => {
      dispatch(createAnec(value))
    },
    setNotif: (value, time) => {
      dispatch(setNotif(value, time))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewAnec)