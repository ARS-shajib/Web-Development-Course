import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {

  return (
    <div>
      <h1>count: 0</h1>
      <button>Increase</button>
    </div>
  )
}

export default App;
