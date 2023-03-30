import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomeBanner from './components/HomeBanner';
import AppHeader from './components/AppHeader';
import SingleHeading from './components/SingleHeading';
import AgencyServices from './components/AgencyServices';
import WeDo from './components/WeDo';
import WeAre from './components/WeAre';
import OurBlogs from './components/OurBlogs';
import AppFooter from './components/AppFooter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHeader />
    <HomeBanner />
    <SingleHeading title=" Digital Marketing Agency Services"/>
    <AgencyServices />
    <SingleHeading title=" What we’ve done"/>
    <WeDo />
    <SingleHeading title=" Who We Are"/>
    <WeAre />
    <SingleHeading title=" Our Recent Blogs"/>
    <OurBlogs />
    <AppFooter />
  </React.StrictMode>
);

reportWebVitals();
