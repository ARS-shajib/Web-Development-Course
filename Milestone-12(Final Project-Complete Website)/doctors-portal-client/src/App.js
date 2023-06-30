import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home></Home>} />
        </Routes>
        <Routes>
          <Route exact path='/' element={<Home></Home>} />
        </Routes>
        <Routes>
          <Route path='/appointment' element={<Appointment></Appointment>} />
        </Routes>
        <Routes>
          <Route path='/login' element={<Login></Login>} />
        </Routes>
        <Routes>
          <Route path='/register' element={<Register></Register>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
