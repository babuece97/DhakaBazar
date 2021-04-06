import React from 'react';
import { Card } from 'react-bootstrap';
import './Goods.css';


const Goods = (props) => {
    console.log(props.product.name);
    const {image, name, price} = props.product;
    return (
       
        <Card className='my-5 p-3 rounded'>
           
            <div>
             
              <Card.Img src={image} alt=""/>
            </div>
            <div>
            <strong>
                {name}
            </strong>
            </div>
            <Card.Text> {price} TK</Card.Text>
            <button className="buy-button"> Buy me</button>
        </Card>
        
    );
};

export default Goods;