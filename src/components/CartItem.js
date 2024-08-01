
import React from 'react';

const CartItem = ({ item, removeFromCart }) => (
  <div className="cart-item">
    <h3>{item.name}</h3>
    <p>Price: &#8377;{item.price}</p>
    <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
);

export default CartItem;
