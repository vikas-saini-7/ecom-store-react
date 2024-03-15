import React from 'react'
import { Link } from 'react-router-dom'

const EmptyFavorites = () => {
  return (
    <div className='empty-cart flex flex-col justify-center items-center'>
        <img className='w-72 mb-8' src="/images/no-fav.svg" alt="no image" />
        <p className=' mb-8'>Your Favorites List is Empty...</p>
        <Link to='/products'><span className='text-blue-600'>Browse Products</span></Link>
    </div>
  )
}

export default EmptyFavorites