import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import MyOrderPage from './pages/MyOrderPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import './App.css';


      const App = () => {
      const [cart, setCart] = useState([]);
      const [user, setUser] = useState(localStorage.getItem('username') || '');

        useEffect(() => {
        if (user) {
        localStorage.setItem('username', user);
        } else {
        localStorage.removeItem('username');
        }
        }, [user]);


        useEffect(() => {
          const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
          setCart(savedCart);
        }, []);
      
        const addToCart = (product) => {
          const newCart = [...cart, product];
          setCart(newCart);
          localStorage.setItem('cart', JSON.stringify(newCart));
        };
      
        const removeFromCart = (id) => {
          const newCart = cart.filter(item => item.id !== id);
          setCart(newCart);
          localStorage.setItem('cart', JSON.stringify(newCart));
        };
      
        const clearCart = () => {
          setCart([]);
          localStorage.setItem('cart', JSON.stringify([]));
        };
      
        const checkout = () => {
          const orders = JSON.parse(localStorage.getItem('orders')) || [];
          const newOrders = [...orders, ...cart];
          localStorage.setItem('orders', JSON.stringify(newOrders));
          clearCart();
        };
      
    
  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} clearCart={checkout} />} />
        <Route path="/my-orders" element={<MyOrderPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;







