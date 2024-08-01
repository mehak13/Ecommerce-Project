
import React from 'react';
import CartItem from '../components/CartItem';
import './CartPage.css';

  const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  
  return (
    <div className="cart-page">
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <h2>Total Price: &#8377;{totalPrice}</h2>
      <button onClick={() => window.location.href = '/checkout'}>Checkout</button>

      <div className="thanks-message">
        <h3>Thanks for shopping!</h3>
        <button onClick={() => window.location.href = '/HomePage'}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartPage;

