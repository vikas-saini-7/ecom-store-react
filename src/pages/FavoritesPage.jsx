import React from 'react'
import { useSelector } from 'react-redux'
import FavoritesItem from '../components/FavoritesItem'
import EmptyFavorites from '../components/EmptyFavorites'

const FavoritesPage = () => {
    const {favItems} = useSelector(state => state.favorites);

  return (
    <div className='custom-container mt-[16px]'>
        {
          favItems.length !== 0
          ?
          <div>
            {favItems.map((item) => (
                <FavoritesItem key={item.id} item={item}/>
            ))}
          </div>
          :
          <EmptyFavorites/>
        }
    </div>
  )
}

export default FavoritesPage