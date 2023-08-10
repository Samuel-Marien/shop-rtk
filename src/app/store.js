import { configureStore } from '@reduxjs/toolkit'
import phoneReducer from './features/phones/phoneSlice'
import tvReducer from './features/tvs/tvSlice'
import tabletReducer from './features/tablets/tabletSlice'

const store = configureStore({
  reducer: {
    phone: phoneReducer,
    tv: tvReducer,
    tablet: tabletReducer
  }
})

export default store
