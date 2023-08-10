import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tvs: 10
}

const tvSlices = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    tvs: (state) => {
      state.tvs--
    }
  }
})

export default tvSlices.reducer
export const { tvs } = tvSlices.actions
