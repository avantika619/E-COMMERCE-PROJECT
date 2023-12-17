import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cart.css'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const add = async () => {
    try {
      const response = await axios.get('http://localhost:4000/get');
      setCartItems(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message || 'Network Error');
    }
  };

  useEffect(() => {
    add();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(item => (
          <tr key={item.id}>
            <td>{item.category}</td>
            <td>{item.item}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
