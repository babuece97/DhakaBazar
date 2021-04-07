import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../../products';
import Goods from '../Goods/Goods';
import Orders from '../Orders/Orders';
import { useState } from 'react';
import './Home.css';

const Home = () => {
  //  console.log(products);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    //console.log('YES!!!YES!!Product added', product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      <div className='home-container'>
        <Row>
          {products.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Goods
                showBuyMe={true}
                handleAddProductT={handleAddProduct}
                product={item}
              ></Goods>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <Orders cart={cart}></Orders>
      </div>
    </div>
  );
};

export default Home;
