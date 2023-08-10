import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tablets: 15
}

const tabletSlices = createSlice({
  name: 'tablet',
  initialState,
  reducers: {
    tablets: (state) => {
      state.tablets--
    }
  }
})

export default tabletSlices.reducer
export const { tablets } = tabletSlices.actions
