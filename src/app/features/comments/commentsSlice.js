import React from 'react'
import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  comments: [],
  error: ''
}

createAsyncThunk('/comments/fetchComments', async () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/comments')

    .then((res) => res.data)
})

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false
      state.comments = action.payload
      state.error = ''
    })
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false
      state.comments = []
      state.error = action.error.message
    })
  }
})

export default commentSlice.reducer

// BACKDOOR (after the .get() method):
// RequestsStatus : 'Pending, 'Fulfilled', 'Rejected'
// Pending:
// Version 1:
// Action {
//   type: fetchComments.pending,
//   meta:{requestId: 'abc123', requestStatus:'pending'}
// }
// Version 2:
// Action {
//   type: comments/fetchComments/pending,
//   meta:{requestId: 'abc123', requestStatus:'pending'}
// }
// Fulfilled:
// Action {
//   type: fetchComments.fulfilled,
//   payload: [],
//   meta:{requestId: 'abc123', requestStatus:'fulfilled'}
// }
// Rejected:
// Action {
//   type: fetchComments.rejected,
//   error:{name:string, message:string, code:string}
//   meta:{requestId: 'abc123', requestStatus:'rejected'}
// }
