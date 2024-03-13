import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import CartItem from '../components/CartItem';
import EmptyCart from '../components/EmptyCart';

const CartPage = () => {
  const [deliveryCharges, setDeliveryCharges] = useState(40);
  const {items} = useSelector((state) => state.cart);

  function totalItemsPrice() {
    let price = 0;
    items.forEach(element => {
      price = (element.price * element.quantity) + price
    });
    return price;
  }

  function totalGST() {
    return totalItemsPrice() * 0.18;
  }

  function totalPrice() {
    return totalItemsPrice() + deliveryCharges + totalGST();
  }
  return (
    <div className='custom-container'>
      {items.length !== 0 ?
      <>
      <h2 className='heading'>Cart</h2>
      <div className="cart-page">
        <div className='left'>
          <div className="products-list">
            {items.map(product => (
              <CartItem key={product.id} product={product}/>
            ))}
          <div className="total-price">
            <p>Total: {totalItemsPrice().toFixed(2)}</p>
          </div>
          {/* <button className="checkout-button">Checkout</button> */}
          </div>
        </div>
        <div className='right'>
          <h2 style={{marginBottom: '32px'}}>Checkout to proceed to payments</h2>
          <div className='item'>
            <p>Goods Amount:</p>
            <span>{totalItemsPrice().toFixed(2)}</span>
          </div>
          <div className='item'>
            <p>Delivery Charges:</p>
            <span>{deliveryCharges}</span>
          </div>
          <div className='item'>
            <p>GST (18%):</p>
            <span>{totalGST().toFixed(2)}</span>
          </div>
          <div className='total-amount'>
            <p>Total Amount:</p>
            <h2>{totalPrice().toFixed(2)}</h2>
          </div>
          <button className='btn'>Checkout</button>
        </div>
      </div>
      </>
      :
      <>
      <EmptyCart/>
      </>
      }
      
    </div>
  );
};

export default CartPage;
