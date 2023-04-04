import React from 'react';
import HomeBanner from './components/HomeBanner';
import AppHeader from './components/AppHeader';
import SingleHeading from './components/SingleHeading';
import AgencyServices from './components/AgencyServices';
import WeDo from './components/WeDo';
import WeAre from './components/WeAre';
import OurBlogs from './components/OurBlogs';
import homeBanner from './images/banner1.jpg'

export default function Home() {
    return (
        <>
            <AppHeader />

            <HomeBanner
                banner={homeBanner}
                title='DOMINATE THE COMPETITION'
                content='Honest and ROI-Driven Digital Marketing Agency for small and large
                businesses. Trusted by more than 500 satisfied clients. We help businesses
                dominate all Digital Marketing Channels by implementing full-service digital
                solutions that drives results.'/>

            <SingleHeading
                title=" Digital Marketing Agency Services"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px' />

            <AgencyServices />

            <SingleHeading
                title=" What we’ve done"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px' />

            <WeDo />

            <SingleHeading
                title=" Who We Are"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px' />

            <WeAre />

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
