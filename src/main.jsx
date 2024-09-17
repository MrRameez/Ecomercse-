// src/index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from "./Contaxt/ThemeContaxt";
import UserContaxtProvider from './Contaxt/UserContaxt.jsx';

createRoot(document.getElementById('root')).render(
  <UserContaxtProvider>
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  </UserContaxtProvider>
);
