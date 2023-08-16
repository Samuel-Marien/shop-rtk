import { createSlice } from '@reduxjs/toolkit'
import { tvs as tvsAction } from '../tvs/tvSlice'

const initialState = {
  phones: 5,
  tablets: 15
}

const phoneSlices = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    phones: (state, action) => {
      // action {type: "phone/phones", payload:number}
      state.phones -= action.payload
    },
    adminPhones: (state, action) => {
      // action {type: "phone/adminPhones", payload:number}
      state.phones += action.payload
    },
    tablets: (state, action) => {
      // action {type: "phone/tablets", payload:number}
      state.tablets -= action.payload
    },
    adminTablets: (state, action) => {
      state.tablets += action.payload
    }
  },

  // Add external action
  // CLassic syntax (more efficient):
  extraReducers: (builder) => {
    builder.addCase(tvsAction, (state, action) => {
      if (action.payload <= state.phones) {
        state.phones -= action.payload
      } else if (action.payload > state.phones) {
        state.phones = 0
      }
    })
  }

  // Add external action
  // Alternative syntax:
  // extraReducers: {
  //   ['tv/tvs']: (state) => {
  //     state.phones--
  //   }
  // }
})

export default phoneSlices.reducer
export const { phones, tablets, adminPhones, adminTablets } =
  phoneSlices.actions
