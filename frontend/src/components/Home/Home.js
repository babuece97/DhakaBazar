import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../../products';
import Goods from '../Goods/Goods';
import './Home.css';

const Home = () => {
  //  console.log(products);
    const handleAddProduct= (product)=>{
        console.log('YES!!!YES!!Product added',product);
    }
    return (
        <div className="home-container">
            <Row>
            {
                products.map((item)=>(
                    <Col sm={12} md={6} lg={4} xl={3}>
                         <Goods 
                         handleAddProductT={handleAddProduct}
                         product = {item}> 
                         </Goods> 
                    </Col>
                ))}
            </Row>
                
        </div>
    );
};

export default Home;