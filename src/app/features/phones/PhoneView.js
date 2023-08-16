import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { phones as phonesAction, tablets as tabletsAction } from './phoneSlice'

import phone from '../../../images/phone.png'
import tablet from '../../../images/tablet.png'

const PhoneView = () => {
  const { phones, tablets } = useSelector((state) => state.phone)
  const dispatch = useDispatch()

  return (
    <>
      <div className="container">
        <img src={phone} alt="phone" />
        <p>
          Disponibilité
          <span id="count">{phones}</span>
        </p>
        <div className="btnContainer">
          <button onClick={() => dispatch(phonesAction())}>Acheter</button>
        </div>
      </div>
      <div className="container">
        <img src={tablet} alt="tablet" />
        <p>
          Disponibilité
          <span id="count">{tablets}</span>
        </p>
        <div className="btnContainer">
          <button onClick={() => dispatch(tabletsAction(2))}>Acheter</button>
        </div>
      </div>
    </>
  )
}

export default PhoneView
