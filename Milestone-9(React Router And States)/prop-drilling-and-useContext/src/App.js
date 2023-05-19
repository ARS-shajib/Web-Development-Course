import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import Father from './components/Father/Father';
import Uncle from './components/Uncle/Uncle';
import Aunty from './components/Aunty/Aunty';
import { createContext, useState } from 'react';

export const RingContext = createContext('ring');

function App() {
  const [house, setHouse] = useState(5);
  const ornaments = 'kada mati Ring';
  return (
    <RingContext.Provider value={[ornaments, house]}>
      <div className="App">
        <button onClick={() => setHouse(house + 1)}>Buy a new house</button>
        <GrandFather house={house}></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
