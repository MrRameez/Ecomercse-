// src/index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from "./Contaxt/ThemeContaxt";
import UserContaxtProvider from './Contaxt/UserContaxt.jsx';
import CartContextProvider from './Contaxt/CartContaxt.jsx';

createRoot(document.getElementById('root')).render(
  <UserContaxtProvider>
    <StrictMode>
      <ThemeProvider>
        <CartContextProvider>
        <App />
        </CartContextProvider>
      </ThemeProvider>
    </StrictMode>
  </UserContaxtProvider>
);
