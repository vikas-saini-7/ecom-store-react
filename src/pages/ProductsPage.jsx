import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../redux/actions/productsActions'
import Card from '../components/Card'
import ProductsTopBar from '../components/ProductsTopBar'
import SearchAndFilters from '../components/SearchAndFilters'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'

const ProductsPage = () => {
  const dispatch = useDispatch();
  const {loading, products, error} = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(getAllProducts());
  }, [])
  return (
    <div>
      {/* <ProductsTopBar/> */}
      <div className='flex max-w-[1900px] mx-auto gap-4 flex-col lg:flex-row'>
        <div className='lg:w-1/4 w-full'>
          <SearchAndFilters/>
        </div>
        <ul className='lg:w-3/4 w-full'>
          {loading && <div className='p-4'><Loader/></div>}
          {error != null && <p>Error fetching products...</p>}
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
    </div>
  )
}

export default ProductsPage