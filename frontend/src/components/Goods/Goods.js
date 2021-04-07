import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Goods.css';

const Goods = (props) => {
  console.log(props);
  const { image, name, price, _id } = props.product;
  return (
    <Card className='my-5 p-3 rounded'>
      <div>
        <Card.Img src={image} alt='' />
      </div>
      <div>
        <strong>
          <Link to={'/item/' + _id}>{name}</Link>
        </strong>
      </div>
      <Card.Text> {price} TK</Card.Text>
      {props.showBuyMe && (
        <button
          className='buy-button'
          onClick={() => props.handleAddProductT(props.product)}
        >
          {' '}
          Buy me
        </button>
      )}
    </Card>
  );
};

export default Goods;
