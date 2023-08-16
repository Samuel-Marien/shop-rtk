import { configureStore } from '@reduxjs/toolkit'
import phoneReducer from './features/phones/phoneSlice'
import tvReducer from './features/tvs/tvSlice'

const store = configureStore({
  reducer: {
    phone: phoneReducer,
    tv: tvReducer
  }
})

export default store
