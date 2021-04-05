import React from 'react';
import products from '../../products';
import Goods from '../Goods/Goods';
import './Home.css';

const Home = () => {
    console.log(products);
    return (
        <div className="home-container">
            <ul>
            {
                products.map(item=> <Goods product = {item}> </Goods>)
            }
            </ul>
        </div>
    );
};

export default Home;