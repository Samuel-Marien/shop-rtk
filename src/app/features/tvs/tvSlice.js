import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tvs: 10
}

const tvSlices = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    tvs: (state, action) => {
      state.tvs -= action.payload
    },
    addTvs: {
      reducer: (state, action) => {
        state.tvs += action.payload
      }
    }
  }
})

export default tvSlices.reducer
export const { tvs, addTvs } = tvSlices.actions
