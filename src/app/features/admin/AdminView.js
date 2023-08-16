import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  adminPhones as adminPhonesAction,
  adminTablets as adminTabletsAction
} from '../phones/phoneSlice'
import { addTvs as addTvsAction } from '../tvs/tvSlice'

import StockInfos from '../../../components/StockInfos'

const container = {
  width: '300px',
  padding: '20px',
  border: '1px solid grey',
  margin: '10px auto'
}

const btnContainer = {
  display: 'flex',
  marginBottom: '12px'
}

const AdminView = () => {
  const [phoneNum, setPhoneNum] = useState(0)
  const [tabletNum, setTabletNum] = useState(0)
  const [tvNum, setTvNum] = useState(0)

  const { phone, tv } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div style={container}>
      <h2>Admin</h2>

      <StockInfos product="Téléphones" stock={phone.phones} />
      <div style={btnContainer}>
        <input
          type="number"
          min="1"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
        />
        <button onClick={() => dispatch(adminPhonesAction(parseInt(phoneNum)))}>
          Augmenter stock
        </button>
      </div>

      <StockInfos product="Tablets" stock={phone.tablets} />
      <div style={btnContainer}>
        <input
          type="number"
          min="1"
          value={tabletNum}
          onChange={(e) => setTabletNum(e.target.value)}
        />
        <button
          onClick={() => dispatch(adminTabletsAction(parseInt(tabletNum)))}
        >
          Augmenter stock
        </button>
      </div>

      <StockInfos product="Télévision" stock={tv.tvs} />
      <div style={btnContainer}>
        <input
          type="number"
          min="1"
          value={tvNum}
          onChange={(e) => setTvNum(e.target.value)}
        />
        <button onClick={() => dispatch(addTvsAction(parseInt(tvNum)))}>
          Augmenter stock
        </button>
      </div>
    </div>
  )
}

export default AdminView
