import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';


const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  return (
    <div>
      <h1>This is shop</h1>
      <h3>{products.length}</h3>
      <ul>
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
    </div>
  );
};

export default Shop;