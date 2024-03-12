import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../redux/actions/productsActions'
import Card from '../components/Card'

const ProductsPage = () => {
  const dispatch = useDispatch();
  const {loading, products, error} = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(getAllProducts());
  }, [])
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {loading && <p>Loading...</p>}
        <div className='products-container'>
          {!loading && products.map((product) => (
            <Card
            key={product.id}
            product={product}
            />
          ))}
        </div>
      </ul>
    </div>
  )
}

export default ProductsPage