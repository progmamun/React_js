import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  const handleAddProduct = () => {
    console.log('Product added');
  }

  return (
    <div className="shop-container">
      <div className="product-container">
          {
            products.map(pd => 
            <Product handleAddProduct = {handleAddProduct}
            product={pd}>
            </Product>)
          }
      </div>
      <div className="cart-container">
        <h2>This is cart</h2>
      </div>
    </div>
  );
};

export default Shop;