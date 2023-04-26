import React from 'react';
import LetsTalkFormBanner from './components/LetsTalkFormBanner';
import LetsTalkBanner from './images/letstalkbanner.jpg';
import SingleHeading from './components/SingleHeading';
import OurBlogs from './components/OurBlogs';
import AboutShopify from './components/AboutShopify';
import ShopifyWorkWrapper from './components/shopifyWorkWrapper';

export default function Shopify() {
  return (
    <>
      <LetsTalkFormBanner
        banner={LetsTalkBanner}
        title='SHOPIFY PLUS'
        description='Build your online store with Shopify, the best 
        eCommerce platform with flexible cloud solutions. Get flexible 
        shopping cart system, control over the look and functionality 
        of your website. '
        buttonText='View Our Shopify Portfolio' />

      <AboutShopify />

      <SingleHeading
        title=" Our Recent Work"
        heightSm='160px'
        heightLg='200px'
        titleSizeSm='28px'
        titleSizeLg='35px' />

      <ShopifyWorkWrapper />

      <SingleHeading
        title=" Our Recent Blogs"
        heightSm='160px'
        heightLg='200px'
        titleSizeSm='28px'
        titleSizeLg='35px' />

      <OurBlogs />

    </>
  )
}
