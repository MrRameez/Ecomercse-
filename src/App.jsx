import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import ImageGallery from './pages/ImageGallery'; // Ensure spelling consistency
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import LoginUp from './pages/LoginUp';
import Weather from './pages/Weather';
import Box from './pages/Box';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Box" element={<Box/>} /> 
        <Route path="/ImageGallery" element={<ImageGallery />} /> 
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LoginUp" element={<LoginUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
