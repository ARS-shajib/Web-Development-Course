import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Culture from './Components/Culture/Culture';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}

      <Router>
        <Header></Header>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route path='/about/culture' element={<Culture />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/friend/:friendId' element={<FriendDetail />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
