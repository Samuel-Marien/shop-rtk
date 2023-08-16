import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { phones as phonesAction, tablets as tabletsAction } from './phoneSlice'

import phone from '../../../images/phone.png'
import tablet from '../../../images/tablet.png'

const PhoneView = () => {
  const { phones, tablets } = useSelector((state) => state.phone)
  const dispatch = useDispatch()
  const [tabletNum, setTabletNum] = useState(0)
  const [phoneNum, setPhoneNum] = useState(0)

  return (
    <>
      <div className="container">
        <img src={phone} alt="phone" />
        <p>
          Disponibilité
          <span id="count">{phones}</span>
        </p>
        <div className="btnContainer">
          <button onClick={() => dispatch(phonesAction(phoneNum))}>
            Acheter
          </button>
          <input
            type="number"
            min="1"
            max={phones}
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>
      </div>
      <div className="container">
        <img src={tablet} alt="tablet" />
        <p>
          Disponibilité
          <span id="count">{tablets}</span>
        </p>
        <div className="btnContainer">
          <button onClick={() => dispatch(tabletsAction(tabletNum))}>
            Acheter
          </button>
          <input
            type="number"
            min="1"
            max={tablets}
            value={tabletNum}
            onChange={(e) => setTabletNum(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default PhoneView
