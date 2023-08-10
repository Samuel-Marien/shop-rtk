import { createSlice } from '@reduxjs/toolkit'

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
  }
})

export default phoneSlices.reducer
export const { phones } = phoneSlices.actions
