import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../redux/actions/productsActions'

const PRODUCTS = [
  {
    id: 'p1',
    title: 'product 1'
  },
  {
    id: 'p2',
    title: 'product 2'
  },
  {
    id: 'p3',
    title: 'product 3'
  },
]

const ProductsPage = () => {
  const dispatch = useDispatch();
  const {loading, products, error} = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(getAllProducts());
  }, [])
  return (
    <div>
      <h1>Products Page</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`} >{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage