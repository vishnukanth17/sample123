
import './App.css';
import Home from './component/Home';
import NAvbar from './component/NAvbar';
import Product from './component/Product';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    
    <NAvbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product" element={<Product />} />
   </Routes>
    </>
  );
}

export default App;
