import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';


const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
      </div>
      <div className="cart-container">
        <h2>This is cart</h2>
      </div>
    </div>
  );
};

export default Shop;