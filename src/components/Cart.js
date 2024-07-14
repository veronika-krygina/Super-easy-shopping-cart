import React from 'react';

const Cart = ({ cartItems, removeFromCart, getTotalCost }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Cost: ${getTotalCost()}</h3>
    </div>
  );
};

export default Cart;
