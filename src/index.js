import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomeBanner from './components/HomeBanner';
import AppHeader from './components/AppHeader';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHeader />
    <HomeBanner />
  </React.StrictMode>
);

reportWebVitals();
