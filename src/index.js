import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/index.sass';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header';
import Footer from "./components/footer/footer"
import Home from "./pages/home";
import Erreurpage from "./pages/erreurpage"
import Apropospage  from './pages/apropospage';
import Locationpage from "./pages/locationpage"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="location/:title" element={<Locationpage />} />
        <Route path="/apropos" element={<Apropospage />} />
        <Route path="*" element={<Erreurpage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
