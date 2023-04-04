import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './home';
import WhoWeAre from './whoWeAre';
import AppFooter from './components/AppFooter';
import Contact from './contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<WhoWeAre />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
=======
    <AppHeader />
    <HomeBanner />
    <SingleHeading title=" Digital Marketing Agency Services" bgText='Explore'/>
    <AgencyServices />
    <SingleHeading title=" What we’ve done" bgText='Look'/>
    <WeDo />
    <SingleHeading title=" Who We Are" bgText='Know'/>
    <WeAre />
    <SingleHeading title=" Our Recent Blogs" bgText='Read'/>
    <OurBlogs />
>>>>>>> 9a7b24ca736dc44785b4b6931b2ee3b82deef66b
    <AppFooter />
  </BrowserRouter>
  </React.StrictMode >
);

reportWebVitals();
