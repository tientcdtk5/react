import React from 'react'
import ListStar from './ListStar'

const CardBody = () => {
  return (
    <div className="card-body p-4">
      <div className="text-center">

        <h5 className="fw-bolder">Special Item</h5>

        <ListStar/>
        <span className="text-muted text-decoration-line-through">
          $20.00
        </span>
        $18.00
      </div>
    </div>
  )
}

export default CardBody
