import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: null,
  reducers: {
    updateFilter(state , action) {
      return state = action.payload
    }
  }
})

export const { updateFilter } = filterSlice.actions
export default filterSlice.reducer