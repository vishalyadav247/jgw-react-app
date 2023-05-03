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
import CategoryTemplate from './categoryTemplate';

const App = () => {
  const [data, setData] = useState([]);   // All blogs data 
  const [categories, setCategories] = useState({});   // Categories list define by Admin
  const [popularPost, setPopularPost] = useState({});   // All popular post listed by using popular tag
  const [pageData, setPageData] = useState({});   // Seo page data
  const [pageContent, setPageContent] = useState({})    // Seo page HTML content

  useEffect(() => {
    function my() {

      // Getting All post data
      const p1 = new Promise((resolve, reject) => {
        axios.get('https://www.justgoweb.com/wp-json/wp/v2/posts?per_page=100').then((response) => {
          const posts = response.data;
          resolve(posts)
        })
      });

      // Getting Post Caterories list
      const p2 = new Promise((resolve, reject) => {
        axios.get('https://www.justgoweb.com/wp-json/wp/v2/categories').then((response) => {
          const cat = response.data;
          const catList = {}
          for (let b of cat) {
            catList[b.id] = b.name;
          }
          // console.log(catList);
          resolve(catList)
        })
      })

      // Getting post by tag name (popular)
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

  // seo page data

  useEffect(() => {

    function my() {
      const p1 = new Promise((resolve, reject) => {
        axios.get('https://www.justgoweb.com//wp-json/wp/v2/pages/10562').then((response) => {
          const posts = response.data;
          resolve(posts)

        })
      })
      p1.then((value) => {
        let check = value.content.rendered;
        check = check.replace(/src/g, " ");
        check = check.replace(/data-orig-/g, "src");
        setPageContent(check)
        setPageData(value);
      })
    }
    my()
  }, [])


  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          {/* Navigtion Routes */}
          <Route index path="/" element={<Home data={data} categories={categories} />} />
          <Route path="about" element={<WhoWeAre />} />
          <Route path="seo" element={<Seo pageData={pageData} pageContent={pageContent} />} />
          <Route path="shopify" element={<Shopify data={data} categories={categories} />} />
          <Route path="blogs" element={<Blogs data={data} categories={categories} popularPost={popularPost} />} />
          <Route path="contact" element={<Contact />} />

          {/* blog detail page route */}
          <Route path="/posts/:slug" element={<SinglePost data={data} categories={categories} popularPost={popularPost} />} />
          <Route path="/categories/:categoryName" element={<CategoryTemplate data={data} categories={categories} popularPost={popularPost} />} />

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
