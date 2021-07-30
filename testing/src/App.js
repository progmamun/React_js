import React, { useEffect, useState } from 'react';
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
        <Users></Users>
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
  //const handleIncrease = () => setCount(count + 1);
  const handleIncrease = () => {
    // const newCount = count + 1;
    setCount(count + 1);
  }
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={ () => setCount(count -1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []) 
  // []) ata use korla bar bar ak e jinis asba na useEffect er jono, data load korer jono ata use korta hoi
  return(
    <div>
      <h4>Dynamic Users: {users.length}</h4>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
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
