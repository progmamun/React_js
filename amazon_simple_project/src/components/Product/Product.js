import React from 'react';
import './Product.css';

const Product = (props) => {
  const {img, name, seller, price, stock} = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt=""></img>
      </div>
      <div>
      <h4 className="product-name">{name}</h4>
      <br />
      <p><small>by: {seller}</small></p>
      <p>${price}</p>
      <br />
      <p><small>Only {stock} left in stock - Order soon</small></p>
      </div>
    </div>
  );
};

export default Product;