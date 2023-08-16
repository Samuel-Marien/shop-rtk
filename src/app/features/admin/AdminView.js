import React from 'react'
import { useSelector } from 'react-redux'

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
  // const tvs = useSelector((state) => state.tv.tvs)
  // const { phones, tablets } = useSelector((state) => state.phone)

  const { phone, tv } = useSelector((state) => state)
  console.log(phone)
  console.log(tv)

  return (
    <div style={container}>
      <h2>Admin</h2>

      <StockInfos product="Téléphones" stock={phone.phones} />
      <div style={btnContainer}>
        <input type="number" min="1" value="" onChange={() => {}} />
        <button>Augmenter stock</button>
      </div>

      <StockInfos product="Tablets" stock={phone.tablets} />
      <div style={btnContainer}>
        <input type="number" min="1" value="" onChange={() => {}} />
        <button>Augmenter stock</button>
      </div>

      <StockInfos product="Télévision" stock={tv.tvs} />
      <div style={btnContainer}>
        <input type="number" min="1" value="" onChange={() => {}} />
        <button>Augmenter stock</button>
      </div>
    </div>
  )
}

export default AdminView
