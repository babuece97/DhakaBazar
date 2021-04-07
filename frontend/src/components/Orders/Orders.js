import React from 'react';

const Orders = (props) => {
  const cart = props.cart;
  console.log(cart);
  return (
    <div>
      <h4> this is order summary at new file</h4>
      <h1> items orders : {cart.length}</h1>
    </div>
  );
};

export default Orders;
