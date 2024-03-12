import React from 'react';
import { Link } from 'react-router-dom';

// Function to truncate the description to two lines with ellipsis
const truncateDescription = (text, maxChars) => {
  if (text.length > maxChars) {
    // Truncate the description to the maximum characters
    const truncatedText = text.substring(0, maxChars);
    // Find the index of the last space character to avoid cutting words in half
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
    // Construct the final truncated text with ellipsis
    return `${truncatedText.substring(0, lastSpaceIndex)} ...`;
  }
  return text;
};

const Card = ({ product }) => {
  const { title, price, description, category, image, rating, id } = product;

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
          <button className='btn'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
