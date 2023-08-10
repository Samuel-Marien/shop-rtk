import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tvs as tvsAction } from './tvSlice'

import tv from '../../../images/tv.png'

const TvView = () => {
  // const test = useSelector((state) => state)
  // console.log(test)
  const tvs = useSelector((state) => state.tv.tvs)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <img src={tv} alt="tv" />
      <p>
        Disponibilité
        <span id="count">{tvs}</span>
      </p>
      <div className="btnContainer">
        <button onClick={() => dispatch(tvsAction())}>Acheter</button>
      </div>
    </div>
  )
}

export default TvView
