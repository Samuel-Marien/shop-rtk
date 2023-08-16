import React from 'react'

const span = {
  fontSyze: '19px'
}

const alertStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '10px',
  borderRadius: '5px'
}

const StockInfos = ({ product, stock }) => {
  const alert = stock < 2 && alertStyle

  return (
    <p>
      <span style={{ ...span, ...alert }}>
        {product} : {stock}
      </span>
    </p>
  )
}

export default StockInfos
