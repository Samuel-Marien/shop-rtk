import { createSlice } from '@reduxjs/toolkit'
import { tvs as tvsAction } from '../tvs/tvSlice'

const initialState = {
  phones: 5
}

const phoneSlices = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    phones: (state) => {
      // action {type: "phone/phones", payload:undefined}
      state.phones--
    }
  },

  // CLassic syntax (more efficient):
  extraReducers: (builder) => {
    builder.addCase(tvsAction, (state) => {
      state.phones--
    })
  }

  // Alternative syntax:
  // extraReducers: {
  //   ['tv/tvs']: (state) => {
  //     state.phones--
  //   }
  // }
})

export default phoneSlices.reducer
export const { phones } = phoneSlices.actions
