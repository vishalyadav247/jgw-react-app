import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomeBanner from './components/HomeBanner';
import AppHeader from './components/AppHeader';
import SingleHeading from './components/SingleHeading';
import AgencyServices from './components/AgencyServices';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHeader />
    <HomeBanner />
    <SingleHeading title=" Digital Marketing Agency Services"/>
    <AgencyServices />
    <SingleHeading title=" What we’ve done"/>
  </React.StrictMode>
);

reportWebVitals();
