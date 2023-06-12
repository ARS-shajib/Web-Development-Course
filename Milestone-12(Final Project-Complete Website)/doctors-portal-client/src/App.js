import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
        </Routes>
        <Routes>
          <Route path='/Home' element={<Home></Home>} />
        </Routes>
        <Routes>
          <Route path='/appointment' element={<Appointment></Appointment>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
