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
      <img src={image} alt={title} className="card-img" />
      <div className="card-body">
        <div>
          <Link to={`${id}`}><h2 className="card-title">{title}</h2></Link>
          <p className="card-price">${price}</p>
          <p className="card-description">{truncateDescription(description, 50)}</p>
          <p className="card-category">{category}</p>
          <div className="card-rating">
            Rating: {rating.rate} ({rating.count} reviews)
          </div>
        </div>
        <div>
          <button className='btn' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
