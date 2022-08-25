
import './App.css';
import Home from './component/Home';
import NAvbar from './component/NAvbar';
import Product from './component/Product';
import Login from './component/Login';
import Register from './component/Register';
import {Route, Routes} from 'react-router-dom'
import Items from './component/Items';

function App() {
  return (
    <>
    
    <NAvbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product" element={<Product />} />
      <Route exact path="/product/:id" element={<Items />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
   </Routes>
    </>
  );
}

export default App;
