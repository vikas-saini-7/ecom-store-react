import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='empty-cart'>
        <img src="" alt="" />
        <p>Your Cart is Empty...</p>
        <br />
        <Link to='/products'>Browse Products</Link>
    </div>
  )
}

export default EmptyCart