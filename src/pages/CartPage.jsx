import React, { useState } from 'react';
import './CartPage.css';
import {useSelector} from 'react-redux'

const CartPage = () => {
  const {items} = useSelector((state) => state.cart);

  function totalPrice() {
    let price = 0;
    items.forEach(element => {
      price = (element.price * element.quantity) + price
    });
    return price;
  }

  return (
    <div className="cart-page">
      <div className="products-list">
      <h2>Cart</h2>
        {items.map(product => (
          <div key={product.id} className="product">
            <div className="product-details">
              <p>{product.title}</p>
            </div>
            <div className="product-actions">
              <p className='price'>${product.price}</p>
              <button className="quantity-button">-</button>
              <span className="quantity">{product.quantity}</span>
              <button className="quantity-button">+</button>
            </div>
          </div>
        ))}

      <div className="total-price">
        <p>Total: {totalPrice()}</p>
      </div>
      <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
