import React from 'react';
import LetsTalkFormBanner from './components/LetsTalkFormBanner';
import LetsTalkBanner from './images/letstalkbanner.jpg';
import SingleHeading from './components/SingleHeading';
import OurBlogs from './components/OurBlogs';
import AboutShopify from './components/AboutShopify';
import ShopifyWorkWrapper from './components/shopifyWorkWrapper';
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';


export default function Shopify(props) {
  const { data, categories } = props;
  const SectionTitleCss={
    fontSize:' 35px',
    fontFamily:' Poppins',
    fontWeight:' 700',
    textAlign: 'center',
    color: '#474747',
    marginBottom:'35px'
  }
  const SectionDesc={
    fontSize:' 17px',
    fontFamily:'open sans',
    fontWeight:' 300',
    color: '#7a7a7a',
    marginBottom:'25px',
    lineHeight: '1.8em'
  }
  const SectionInnerHeading={
    fontSize:' 22px',
    fontFamily:' Poppins',
    fontWeight:' 700',
    color: '#474747'
  }
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

      <Box sx={{padding:{xs:'50px 20px',sm:'100px 20px'}}}>
        <Box sx={{ maxWidth: '1200px', margin: '0px auto' }}>
          <Box>
            <Typography sx={SectionTitleCss}>Why use Shopify?</Typography>
          </Box>
          <Box>
            <Typography sx={SectionDesc}>Shopify is designed for simplicity. Website trends are
              constantly changing. What may be in today might become updated
              tomorrow. Shopify makes sure it stays on top of all new changes.
              It is constantly updating its features and releasing new apps.
            </Typography>
            <Typography sx={SectionInnerHeading}>
              All in one feature
            </Typography>
            <Typography sx={SectionDesc}>
              One of the major reasons for Shopify’s popularity is that it is an
              all-in-one solution. From web designs to payment gateways and hosting
              everything is handled by it along with built-in blogging platforms.
            </Typography>
            <Typography sx={SectionInnerHeading}>
              Easy to use
            </Typography>
            <Typography sx={SectionDesc}>
              Shopify is straightforward and simple to use. It starts with the account
              setup process and you can start your free, 2-week trial by entering your
              email on the Shopify homepage. It has some good default theme options
              which are easy to customize. There are also several different themes
              you can install or purchase. It allows you to add an unlimited number
              of products, titles, descriptions, images, prices, barcodes, shipping
              options with ease.
            </Typography>
            <Typography sx={SectionInnerHeading}>
              Numerous ways to sell
            </Typography>
            <Typography sx={SectionDesc}>
              Shopify not only hosts your store for you but also provides multiple ways
              to sell with it. For instance, Shopify POS is a point of sale system that
              allows you to sell your products in person. You can use it to create a cart
              for customers, customize the cart, and accept payment with a range of methods.
              You can also sell your products on social media without having to redirect
              customers to your site. They can complete the order directly on the social
              media platform.
            </Typography>
            <Typography sx={SectionInnerHeading}>
              24/7 Customer Support
            </Typography>
            <Typography sx={SectionDesc}>
              Shopify has 24/7 customer support which it offers through live chats, emails,
              and phones. You can find FAQs, user guides, and tutorials in the help center
              and also take part in a community discussion forum about marketing, accounting
              and more.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: '#f9f9f9' ,padding:{xs:'50px 20px',sm:'100px 20px'}}}>
        <Box sx={{ maxWidth: '1200px', margin: '0px auto' }}>
          <Box>
            <Typography sx={SectionTitleCss}>List of Features</Typography>
          </Box>
          <Box>
            <Typography sx={SectionInnerHeading}>
              Storefront
            </Typography>
            <Typography sx={SectionDesc}>
              Shopify has 70+ professional themes, easily customizable templates, built-in
              mobile shopping carts. You will have complete access to the HTML and CSS of
              your online store which makes it easy to customize every aspect of your online
              store. Your online store comes with a full-featured content management system
              along with blogging features that helps you to publish articles, create lookbooks,
              and encourage discussions.
            </Typography>
            <Typography sx={SectionInnerHeading}>
              Shopping Carts
            </Typography>
            <Typography sx={SectionDesc}>
              Your online store will have a free-SSL certificate, 100 payment gateways,
              checkouts in over 50 languages. You can recover lost sales by sending email
              notifications to your customers about their abandoned shopping carts.
            </Typography>
            <Typography sx={SectionInnerHeading}>
              Store Management
            </Typography>
            <Typography sx={SectionDesc}>
              You can information on your customers and their shopping habits at a glance.
              You’ll be able to categorize customer list based on locations, purchase history
              and so on. You can encourage customers to visit again by enabling customer
              accounts creation at checkouts. You’ll be able to connect to fulfillment
              solutions such as Amazon, Rakuten, and Shipwire. Integrated apps like eCommHub,
              Ordoro, Inventory Source makes it easy to set up your drop shipping business.
            </Typography>
            <Typography sx={SectionInnerHeading}>
              Search Engine Optimization
            </Typography>
            <Typography sx={SectionDesc}>
              Shopify supports customizable H1, title, and meta tags. Your sitemaps are
              automatically generated along with your products, webpages, and blog posts.
              You can attract buyers by creating targeted discount codes and Buy One, Get
              One promotion. All Shopify websites have social media integration, such as
              Pinterest, Instagram, Facebook, Twitter, and Tumblr. It also allows for people
              to browsers through your products on Facebook and makes a purchase without
              leaving Facebook.
            </Typography>
            <Typography sx={SectionInnerHeading}>
              Product Management
            </Typography>
            <Typography sx={SectionDesc}>
              You easily manage your entire inventory, track stock counts and automatically
              stop selling products when you are out-of-stock. Customers will be able to order
              and download digital products. You can sell an unlimited number of products from
              your online store. You can add multiple images for each product and optimize
              product pages for search engines with specific meta tags, titles, and URL handles.
            </Typography>
            <Typography sx={SectionInnerHeading}>
              Analytics
            </Typography>
            <Typography sx={SectionDesc}>
              You’ll have an actionable dashboard of sales, orders, and traffic. You gain insight
              into your performance, see which products are selling and which are not. You can
              track your sales, visits, and referrals. You get to know where your visitors come
              from and how they found you.
            </Typography>
            <Typography sx={SectionInnerHeading}>
              Shopify on Phone
            </Typography>
            <Typography sx={SectionDesc}>
              You can add products and manage inventory, take a photo or change a price directly
              from your phone through the Shopify mobile app. All your products, customers and
              their orders are automatically synced between the app and your online store. You
              can also capture payments and fulfill orders right from your phone.
            </Typography>
          </Box>
        </Box>
      </Box>

      <SingleHeading
        title=" Our Recent Blogs"
        heightSm='160px'
        heightLg='200px'
        titleSizeSm='28px'
        titleSizeLg='35px' />

      <OurBlogs data={data} categories={categories}/>

    </>
  )
}
