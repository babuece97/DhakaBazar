import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../products';
import Goods from '../Goods/Goods';
//this is hook that will be called with parameter
const GoodsDetail = () => {
  const { productKey } = useParams();
  const productt = products.find((prd) => prd._id === productKey);
  console.log(productt);
  return (
    <div>
      <h4> Your desired products detailsss</h4>
      <Goods showBuyMe={false} product={productt}></Goods>
    </div>
  );
};
// propsss product is going to productt
export default GoodsDetail;
