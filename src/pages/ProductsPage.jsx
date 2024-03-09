import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div>
      <h1>ProductsPage</h1>
      <p>Go to <Link to='/'>Home</Link></p>
    </div>
  )
}

export default ProductsPage