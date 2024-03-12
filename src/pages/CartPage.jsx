import React, { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    // Add more products as needed
  ]);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleAddProduct = (productId) => {
    const updatedCart = cart.map(product =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(updatedCart);
  };

  const handleRemoveProduct = (productId) => {
    const updatedCart = cart.map(product =>
      product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    );
    setCart(updatedCart);
  };

  return (
    <div className="cart-page">
      <div className="products-list">
      <h2>Cart</h2>
        {cart.map(product => (
          <div key={product.id} className="product">
            <div className="product-details">
              <p>{product.name}</p>
            </div>
            <div className="product-actions">
              <p className='price'>${product.price}</p>
              <button className="quantity-button" onClick={() => handleRemoveProduct(product.id)}>-</button>
              <span className="quantity">{product.quantity}</span>
              <button className="quantity-button" onClick={() => handleAddProduct(product.id)}>+</button>
            </div>
          </div>
        ))}

      <div className="total-price">
        <p>Total: ${getTotalPrice()}</p>
      </div>
      <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
