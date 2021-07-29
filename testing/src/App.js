// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name="Al Mamun Khan" title="Web Developer"></Person>
      </header>
    </div>
  );
}
function Person(props){
  return (
    <div style={{border: '2px solid gold', width: '400px', margin: '10px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.title}</p>
    </div>
  )
}

export default App;
