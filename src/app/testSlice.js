import { createSlice } from '@reduxjs/toolkit'

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    results: {},
  },
  reducers: {
    completed: (state, action) => {
      const { testId, stageId } = action.payload;
      state.results[testId]= { ...state.results[testId], [stageId]: true };
    },
  },
})

// Action creators are generated for each case reducer function
export const { completed } = testSlice.actions

export default testSlice.reducer