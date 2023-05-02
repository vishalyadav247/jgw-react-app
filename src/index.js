import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './jgw.css';
import './jgwNew.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import WhoWeAre from './whoWeAre';
import AppFooter from './components/AppFooter';
import Contact from './contact';
import AppHeader from './components/AppHeader';
import Shopify from './shopify';
import Blogs from './blogs';
import Seo from './seo';
import SinglePost from './components/SinglePost';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState({});
  const [popularPost, setPopularPost] = useState({});


  useEffect(() => {
    function my() {
      const p1 = new Promise((resolve, reject) => {
        axios.get('https://www.justgoweb.com/wp-json/wp/v2/posts?per_page=8').then((response) => {
          const posts = response.data;
          resolve(posts)
        })
      });

      const p2 = new Promise((resolve, reject) => {
        axios.get('https://www.justgoweb.com/wp-json/wp/v2/categories').then((response) => {
          const cat = response.data;
          const catList = {}
          for (let b of cat) {
            catList[b.id] = b.name;
          }
          resolve(catList)
        })
      })

      const p3 = new Promise((resolve, reject) => {
        axios.get(`https://www.justgoweb.com/wp-json/wp/v2/tags`).then((response) => {
          const tag = response.data;
          const tagList = {};
          let popPost = [];
          for (let b of tag) {
            tagList[b.id] = b.name;
          }
          for (let b in tagList) {
            if (tagList[b] === 'popular') {
              axios.get(`https://www.justgoweb.com/wp-json/wp/v2/posts?tags=${b}`).then((response) => {
                const dat = response.data;
                for (let i in dat) {
                  popPost.push(dat[i])
                }

                resolve(popPost)
              })
              break
            }
          }

        })
      })

      Promise.all([p1, p2, p3]).then((values) => {
        setData(values[0]);
        setCategories(values[1]);
        setPopularPost(values[2]);
      });
    }
    my()
  }, [])

  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route index path="/" element={<Home data={data} categories={categories} />} />
          <Route path="seo" element={<Seo />} />
          <Route path="about" element={<WhoWeAre />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shopify" element={<Shopify data={data} categories={categories}/>} />
          <Route path="blogs" element={<Blogs data={data} categories={categories} popularPost={popularPost} />} />
          <Route path="/posts/:id" element={<SinglePost data={data} categories={categories} popularPost={popularPost}/>} />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </React.StrictMode >
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

reportWebVitals();
