import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/cartSlice'

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
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img p-2" />
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className='flex items-center justify-between mb-4'>
          <p className="text-green-600">${price}</p>
          <p className="bg-yellow-400 border-gray-400 rounded border bg-opacity-30 text-sm px-2">{category}</p>
        </div>
        <div>
          <Link to={`${id}`}><h2 className="font-bold text-lg">{title}</h2></Link>
          
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
