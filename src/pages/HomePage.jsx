import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import Swiper from '../components/Swiper';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { getAllProducts } from '../redux/actions/productsActions'

const HomePage = () => {
  const dispatch = useDispatch();
  const {loading, products, error} = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(getAllProducts());
  }, [])
  return (
    <div>
      <Swiper/>
      {/* products  */}
      <div className='custom-container mt-2'>
        {loading && <div className='p-4'><Loader/></div>}
        {error != null && <p>Error fetching products...</p>}
        <div className='products-container'>
          {!loading && products.slice(0, 8).map((product) => (
            <Card
            key={product.id}
            product={product}
            />
          ))}
        </div>
      </div>
      {/* products end  */}
    </div>
  )
}

export default HomePage