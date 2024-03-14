import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/cartSlice'
import { addToFavorites, removeFromFavorites } from '../redux/FavoriteSlice';

// Function to truncate the description to two lines with ellipsis
const truncateDescription = (text, maxChars) => {
  if (text.length > maxChars) {
    const truncatedText = text.substring(0, maxChars);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
    return `${truncatedText.substring(0, lastSpaceIndex)} ...`;
  }
  return text;
};


const Card = ({ product }) => {
  const { title, price, description, category, image, rating, id } = product;
  const {favItems} = useSelector((state) => state.favorites)
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const present = favItems.some((item) => item.id === id);
    if(present){
      setIsLiked(true)
    }
  }, [])

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  const handleLike = () => {
    dispatch(addToFavorites(product))
    setIsLiked(true)
  }
  const handleRemoveLike=()=> {
    dispatch(removeFromFavorites(product))
    setIsLiked(false)
  }
  return (
    <div className="card relative">
      {
        !isLiked
        &&
        <img onClick={handleLike} src="/images/heart.png" className='absolute right-5 top-5 w-8 opacity-50 cursor-pointer' alt="" />
      }
      {
        isLiked
        &&
        <img onClick={handleRemoveLike} src="/images/heart-filled.png" className='absolute right-5 top-5 w-8 cursor-pointer' alt="" />

      }
      <img src={image} alt={title} className="card-img p-2" />
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className='flex items-center justify-between mb-4'>
          <p className="text-green-600">${price}</p>
          <p className="bg-yellow-400 border-gray-400 rounded border bg-opacity-30 text-sm px-2">{category}</p>
        </div>
        <div>
          <Link to={`/products/${id}`}><h2 className="font-bold text-lg">{title}</h2></Link>
          
          <p className="text-gray-500">{truncateDescription(description, 50)}</p>
          
          <div className="">
            Rating: {rating.rate} ({rating.count} reviews)
          </div>
        </div>
        <div>
          <button className="border w-full border-gray-400 py-2 mt-4 hover:bg-yellow-400 hover:border-black rounded" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
