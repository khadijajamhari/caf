import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext'; // تم تأمينها بالكامل هنا
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Customizer from './pages/Customizer';
import SignUp from './pages/SignUp';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-[#0b0b0b] text-white antialiased selection:bg-[#d4af37] selection:text-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lab" element={<Customizer />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
  