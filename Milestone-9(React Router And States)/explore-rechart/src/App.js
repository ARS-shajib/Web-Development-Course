import logo from './logo.svg';
import './App.css';
import MyLineChart from './Components/MyLineChart/MyLineChart';
import MyAreaChart from './Components/MyAreaChart/MyAreaChart';

function App() {
  return (
    <div className="App">
      <p>chart:</p>
      <MyLineChart></MyLineChart>
      <MyAreaChart></MyAreaChart>
    </div>
  );
}

export default App;
