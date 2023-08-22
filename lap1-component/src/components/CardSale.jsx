import React from 'react'

const CardSale = ({sale}) => {
  return (
    <div
    className="badge bg-dark text-white position-absolute"
    style={{ top: "0.5rem", right: "0.5rem" }}
  >
    {sale}
  </div>
  )
}

export default CardSale