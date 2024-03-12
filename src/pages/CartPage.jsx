import React, { useState } from 'react';
import './CartPage.css';
import {useSelector} from 'react-redux'
import CartItem from '../components/CartItem';

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
          <CartItem key={product.id} product={product}/>
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
