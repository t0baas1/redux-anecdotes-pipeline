import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const anecSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers: {
    createAnec(state, action) {
      state.push(action.payload)
    },
    addVote(state, action) {
      return state.map(anec => anec.id !== action.payload.id ? anec : action.payload)
    },
    appendAnec(state, action) {
      state.push(action.payload)
    },
    setAnecs(state, action) {
      return action.payload
    }
  }
})

export const { addVote, appendAnec, setAnecs } = anecSlice.actions

export const initializeAnecs = () => {
  return async dispatch => {
    const anecs = await anecdoteService.getAll()
    dispatch(setAnecs(anecs))
  }
}

export const createAnec = anec => {
  return async dispatch => {
    const newAnec = await anecdoteService.createNew(anec)
    dispatch(appendAnec(newAnec))
  }
}

export const setVote = anec => {
  return async dispatch => {
    const updatedAnec = await anecdoteService.addVote(anec)
    dispatch(addVote(updatedAnec))
  }
}

export default anecSlice.reducer