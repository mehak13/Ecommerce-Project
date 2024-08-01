
import React, { useEffect } from 'react';
import './CheckoutPage.css';

const CheckoutPage = ({ cart, clearCart }) => {
  
  useEffect(() => {
    if (cart.length > 0) {
      clearCart();
      window.location.href = '/my-orders';
    }
  }, [cart, clearCart]);


  return (
    <div className="checkout-container">
      <h2>Processing your order...</h2>
      <div className="loader"></div>
      <p>No products added!!</p>
    </div>
  );
};

export default CheckoutPage;
