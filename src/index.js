import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/AppContext'; // هذا هو السطر السحري

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* قمنا بوضع الـ AppProvider هنا ليحمي المقهى بالكامل */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);