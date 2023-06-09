import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderReview from './Component/OrderReview/OrderReview';
import Inventory from './Component/Inventory/Inventory';
import NotFound from './Component/NotFound/NotFound';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Shipping from './Component/Shipping/Shipping';
import Orders from './Component/Orders/Orders';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<Shop></Shop>} />
            <Route path='/shop' element={<Shop></Shop>} />
            <Route path='/review' element={<OrderReview />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route element={<PrivateRoute />}>
              <Route element={<PlaceOrder />} path='/placeorder' exact />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route element={<Shipping />} path='/shipping' exact />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route element={<Orders />} path='/orders' exact />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
