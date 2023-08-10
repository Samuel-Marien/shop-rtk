import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { phones as phonesAction } from './phoneSlice'

import phone from '../../../images/phone.png'

const PhoneView = () => {
  const { phones } = useSelector((state) => state.phone)
  const dispatch = useDispatch()

  return (
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
  )
}

export default PhoneView
