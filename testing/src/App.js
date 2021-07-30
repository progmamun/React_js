import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

const products = [
  {name: 'Photoshop', price: '$90.99'},
  {name: 'Illustrator', price: '$60.99'},
  {name: 'Adobe XD', price: '$50.99'}
]
const bdteam = [
  'Shakib Al Hasan', 'Tamim', 'Shamim', 'The Fizz', 'Mahedi'
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name="Al Mamun Khan" title="Web Developer"></Person>
        {/* <Product product={products[0].name} price={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Counter></Counter>
        <ul>
          {
            bdteam.map(bdteams => <li>{bdteams}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

      </header>
    </div>
  );
}
// react hook
function Counter(){
  const [count, setCount] = useState(5);
  return(
    <div>
      <h3>Count: {count}</h3>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border: '2px solid gold', width: '400px', margin: '10px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.title}</p>
    </div>
  );
}
function Product(props){
  const productStyle= {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  // const {name, price} = {name: 'Photoshop', price:'$90.99'};
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      {/* <h3>{props.name}</h3> */}
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  );
}

export default App;
