import React from 'react';
import LetsTalkFormBanner from './components/LetsTalkFormBanner';
import LetsTalkBanner from './images/letstalkbanner.jpg';

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
    buttonText='View Our Shopify Portfolio'/>
    </>
  )
}
