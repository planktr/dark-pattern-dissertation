import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  timer: { start: 0, end: 0 },
  results: {
    1: {
      1: {
        completed: false,
        errors: 0
      }
    },
    2: {
      1: { 
        completed: false,
        errors: 0
      }
    }
  },
};

export const testSlice = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
      return state;
    },
    completed: (state, action) => {
      const { testId, stageId } = action.payload;
      state.results[testId]= { ...state.results[testId], [stageId]: { ...state.results[testId][stageId], completed: true } };
      return state;
    },
    wrongElement: (state, action) => {
      const { testId, stageId } = action.payload;
      state.results[testId][stageId].errors++;
      return state;
    },
    startTimer: (state, action) => {
      const { startTime } = action.payload;
      state.timer.start = startTime;
      return state;
    },
    endTimer: (state, action) => {
      const { endTime } = action.payload;
      state.timer.end = endTime;
      return state;
    }
  },
})

// Action creators are generated for each case reducer function
export const { reset } = testSlice.actions;
export const { completed } = testSlice.actions
export const { wrongElement } = testSlice.actions
export const { startTimer } = testSlice.actions;
export const { endTimer } = testSlice.actions;

export default testSlice.reducer
