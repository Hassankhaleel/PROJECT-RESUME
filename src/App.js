import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Home from './Components/Redux/Pages/Home';
import Cart from './Components/Redux/Pages/Cart';
import Navbar from './Components/Navbar';
import Product from './Components/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='Product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
