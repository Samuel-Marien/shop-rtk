import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tablets as tabletsAction } from './tabletSlice'

import tablet from '../../../images/tablet.png'

const TabletView = () => {
  const { tablets } = useSelector((state) => state.tablet)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <img src={tablet} alt="tablet" />
      <p>
        Disponibilité
        <span id="count">{tablets}</span>
      </p>
      <div className="btnContainer">
        <button onClick={() => dispatch(tabletsAction())}>Acheter</button>
      </div>
    </div>
  )
}

export default TabletView
