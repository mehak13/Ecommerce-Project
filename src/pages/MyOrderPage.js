
import React, { useEffect, useState } from 'react';
import './MyOrderPage.css';

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  
  return (
    <div className="my-orders-container">
      <h1>My Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.description}</td>
                <td>&#8377;{order.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrderPage;





