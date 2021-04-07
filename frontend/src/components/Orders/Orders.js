import React from 'react';

const Orders = (props) => {
  const cart = props.cart;
  console.log(cart);
  const total = cart.reduce((total, prd) => total + prd.price, 0).toFixed(2);
  return (
    <div>
      <h4> this is order summary at new file</h4>
      <h1> items orders : {cart.length}</h1>
      <p>Total Price:{total}TK</p>
    </div>
  );
};

export default Orders;
