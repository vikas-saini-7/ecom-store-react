import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const ProductDetailsPage = () => {
    const params = useParams();
  return (
    <div>
        <h1>ProductDetailsPage</h1>
        <p>{params.productId}</p>
        <Link to=".." relative='path'>Back</Link>
    </div>
  )
}

export default ProductDetailsPage