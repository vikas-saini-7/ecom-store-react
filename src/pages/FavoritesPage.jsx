import React from 'react'
import { useSelector } from 'react-redux'
import FavoritesItem from '../components/FavoritesItem'

const FavoritesPage = () => {
    const {favItems} = useSelector(state => state.favorites);

  return (
    <div className='custom-container mt-[16px]'>
        {/* <h1 className='mt-[16px]'>Products that you liked</h1> */}
        <div>
            {favItems.map((item) => (
                <FavoritesItem key={item.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default FavoritesPage