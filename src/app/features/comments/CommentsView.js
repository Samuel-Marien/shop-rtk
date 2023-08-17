import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchComments } from './commentsSlice'

const CommentsView = () => {
  const commentSlice = useSelector((state) => state.comment)
  // console.log(commentSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    // une fonction de type AsyncThunkAction
    dispatch(fetchComments())
  }, [fetchComments])

  return (
    <>
      <h2>Comments</h2>
      {commentSlice.isLoading ? (
        <p style={{ textAlign: 'center' }}>Veuillez patientez...</p>
      ) : commentSlice.error ? (
        <p style={{ color: 'red', textAlign: 'center' }}>
          {commentSlice.error}
        </p>
      ) : (
        commentSlice.comments.map(({ body, email, id, name }) => {
          return (
            <div className="comments" key={id}>
              <p>Nom: {name}</p>
              <p>Email: {email}</p>
              <p>Avis: {body}</p>
            </div>
          )
        })
      )}
    </>
  )
}

export default CommentsView
