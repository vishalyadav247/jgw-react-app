import React from 'react';
import HomeBanner from './components/HomeBanner';
import SingleHeading from './components/SingleHeading';
import AgencyServices from './components/AgencyServices';
import WeDo from './components/WeDo';
import WeAre from './components/WeAre';
import OurBlogs from './components/OurBlogs';
import homeBanner from './images/banner1.jpg';


export default function Home(props) {
    const { data, categories } = props;

    return (
        <>
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
                titleSizeLg='35px'
                bgText='EXPLORE' />

            <AgencyServices />

            <SingleHeading
                title=" What we’ve done"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='LOOK' />

            <WeDo />

            <SingleHeading
                title=" Who We Are"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='KNOW' />

            <WeAre />

            <SingleHeading
                title=" Our Recent Blogs"
                heightSm='160px'
                heightLg='200px'
                titleSizeSm='28px'
                titleSizeLg='35px'
                bgText='READ' />

            <OurBlogs data={data} categories={categories}/>
        </>
    )
}
