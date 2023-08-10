import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  phones: 5
}

createSlice({
  name: 'phone',
  initialState,
  reducers: {
    phones: (state, action) => {
      // action {type: "phone/phones", payload:undefined}
      state.phones -= action.payload
    }
  }
})
