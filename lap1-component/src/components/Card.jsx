import React from 'react'
import CardSale from './CardSale'
import CardImg from './CardImg'
import CardBody from './CardBody'
import Button from './Button'

const Card = () => {
  return (
  <div className="col mb-5">
    <div className="card h-100">
      <CardSale sale={'sale'}/>
      <CardImg img={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'} />
      <CardBody/>
      <Button>Add to cart</Button>
    </div> 
  </div>    
  )
}

export default Card
