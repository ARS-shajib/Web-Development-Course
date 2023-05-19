import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderReview from './Component/OrderReview/OrderReview';
import Inventory from './Component/Inventory/Inventory';
import NotFound from './Component/NotFound/NotFound';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Shop></Shop>} />
          <Route path='/shop' element={<Shop></Shop>} />
          <Route path='/review' element={<OrderReview />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
