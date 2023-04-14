import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './home';
import WhoWeAre from './whoWeAre';
import AppFooter from './components/AppFooter';
import Contact from './contact';
import AppHeader from './components/AppHeader';
import Shopify from './shopify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppHeader />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<WhoWeAre />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shopify" element={<Shopify />} />
    </Routes>
    <AppFooter />
  </BrowserRouter>
  </React.StrictMode >
);

reportWebVitals();
