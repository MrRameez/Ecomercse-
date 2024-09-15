import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import NotFound from './pages/NotFound';
import Weather from './pages/Weather';
import Box from './pages/Box';
import SignUp from './pages/Auth/SignUp';
import LoginUp from './pages/Auth/LoginUp';
import BuyProduct from './pages/BuyProduct';
import Product from './pages/Product';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Box" element={<Box/>} />
        <Route path="/BuyProduct" element={ <BuyProduct/>} />
        <Route path="/Product/:id" element={ <Product/>} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LoginUp" element={<LoginUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
