import React from 'react'
import { removeFromCart, addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({product}) => {
    const dispatch = useDispatch();

  function addToCartHandler(){
    dispatch(addToCart(product))
  }
  function removeFromCartHandler(){
    dispatch(removeFromCart(product.id))
  }

  return (
    <div key={product.id} className="product">
        <div className="product-details">
            <img style={{height: '60px', marginRight: '16px'}} src={product.image} alt="" />
            <p>{product.title}</p>
        </div>
        <div className="product-actions">
            <p className='price'>${product.price}</p>
            <button className="quantity-button" onClick={removeFromCartHandler}>-</button>
            <span className="quantity">{product.quantity}</span>
            <button className="quantity-button" onClick={addToCartHandler}>+</button>
        </div>
    </div>
  )
}

export default CartItem