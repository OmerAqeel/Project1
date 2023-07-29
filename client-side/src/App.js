import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/homePage';
import Categories from './components/categories';
import SellBooks from './components/sellBooks';
import LoginPage from './components/loginPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/sellBooks" element={<SellBooks />} />
          <Route path="/loginPage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
