import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeFromFavorites } from '../redux/FavoriteSlice';
import { addToCart } from '../redux/cartSlice';

const FavoritesItem = ({item}) => {
    const dispatch = useDispatch();

    function handleRemoveFromCart(){
        dispatch(addToCart(item))
    }

    function handleRemove(){
        dispatch(removeFromFavorites(item))
    }

  return (
    <div className='bg-white rounded-lg mb-4 md:flex max-w-[900px] mx-auto'>
        <div className='relative md:w-1/3'>
            <img className='object-contain w-full h-[250px] p-4' src={item.image} alt="" />
            <button className=' absolute top-4 right-0 px-4 py-2 text-white rounded-xl' onClick={handleRemove}>
                <img className='w-7' src="./images/heart-filled.png" alt="" />
            </button>
        </div>
        <div className='p-4 md:w-2/3'>
            <h1 className='font-bold text-xl'>{item.title}</h1>
            {/* <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga commodi beatae cupiditate. Quas ad quod, earum est ea blanditiis.</p> */}
            <p className='text-gray-500'>{item.description}</p>
            <div className='flex items-center justify-between mb-4 mt-4'>
                <p className="text-green-600">${item.price}</p>
                <p className="bg-yellow-400 border-gray-400 rounded border bg-opacity-30 text-sm px-2">{item.category}</p>
            </div>
            <div className="">
                Rating: {item.rating.rate} ({item.rating.count} reviews)
            </div>
            <div className='flex gap-3 mt-4 items-center'>
                <Link to={`/products/${item.id}`}>
                    <button  className='px-4 py-2  text-black border rounded-xl'>View Details</button>
                </Link>
                <button onClick={handleRemoveFromCart} className='px-4 py-2 bg-gray-800 text-white rounded-xl' >Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default FavoritesItem