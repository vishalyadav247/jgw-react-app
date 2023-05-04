import { Box, Typography, Divider, TextField, Button } from '@mui/material';
import newsletterImage from './images/newslatterformimage.jpg';
import { useEffect, useState } from 'react';
import EmailIcon from './images/emailicon.png';
import { Link, useParams } from "react-router-dom";
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function CategoryTemplate(props) {

    const { data, categories, popularPost } = props;
    const [pageData, setPageData] = useState([])
    const [pageCount, setPageCount] = useState(1);

    const { categoryName } = useParams();
    let catId = 0;
    for (let i in categories) {
        if (categories[i] === categoryName) {
            catId = i;
        }
    }

    // recent blogs
    const [recentPost, setRecentPost] = useState([]);

    // blogs slice parameter to show in pagination
    const [postFrom, setPostFrom] = useState(0);
    const [postTo, setPostTo] = useState(8);

    // No. of blogs to be shown in a page
    var noOfPost = 8;

    useEffect(() => {
        function my() {
            // recent post
            const p1 = new Promise((resolve, reject) => {
                const postArray = []
                for (let i = 0; i < 3; i++) {
                    const post = data[i];
                    postArray.push(post)
                }
                resolve(postArray)
            })
            p1.then((value) => {
                setRecentPost(value);
            })
        }
        my()

    }, [data])

    useEffect(() => {
        const p3 = new Promise((resolve, reject) => {
            const totalPosts = pageData.length;
            const pages = Math.ceil(totalPosts / noOfPost)
            resolve(pages)
        });
        p3.then((value) => {
            setPageCount(value)
        })

    }, [pageData])

    useEffect(() => {
        const p4 = new Promise((resolve, reject) => {
            let catPostS = []
            for (let i in data) {
                let catIdArr = data[i].categories;
                for (let j in catIdArr) {
                    if (catId == catIdArr[j]) {
                        catPostS.push(data[i])
                    }
                }
            }
            resolve(catPostS)
        })
        p4.then((value) => {
            setPageData(value)
        })

    }, [data, recentPost])

    const paginationfun = (event) => {
        topScroll()
        let digit = event.selected + 1;
        setPostFrom(digit * noOfPost - noOfPost);
        setPostTo(digit * noOfPost)
    }

    const wrapperCss = {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr" },
        gridGap: "40px",
        width: { xs: '100%', md: '67%' }
    }
    const itemCss = {
        overflow: "hidden !important"
    }
    const BlogTitle = {
        color: "white",
        fontFamily: "poppins",
        fontSize: "24px",
        fontWeight: "400",
        lineHeight: "30px",
        height: '90px',
        overflow: 'hidden',
    }
    const MiddleSpan = {
        borderLeft: "1px solid #ffffffa5",
        borderRight: "1px solid #ffffffa5",
        padding: "0px 5px",
        margin: "0px 5px"
    }
    const loaderCss = {
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#272bff',
        fontSize: '30px'
    }
    const topScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const categoriesLinkCss = {
        color: '#ffffffa5',
        fontSize: '12px',
        fontFamily: 'open sans',
        textDecoration: 'none'
    }
    const hyphen = (str)=>{
        let categoryName = str;
        categoryName = categoryName.replace(/" "/g, "-");
        return categoryName
    }
    
    return (
        <>
            <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
            {pageData[0] ? (
                <Box sx={{ backgroundColor: '#fffffff', padding: { xs: '50px 20px', md: '50px 30px', lg: '50px 0px' } }}>
                    {/* breadcrum */}
                    <Box sx={{ maxWidth: "1200px", margin: "auto", fontSize: '13px', padding: '8px 0px', boxShadow: '1px 1px 2.5px #ded8f4', display: { xs: 'none', md: 'block', marginBottom: '42px' } }}>
                        <span>
                            <Link to='/' style={{ textDecoration: 'none', fontWeight: '600', color: 'black' }}>Home</Link>
                        </span>
                        <span style={{ padding: '0px 6px' }}>|</span>
                        <span>
                            <Link to='/blogs' style={{ textDecoration: 'none', fontWeight: '600', color: 'black' }}>Blogs</Link>
                        </span>
                        <span style={{ padding: '0px 6px' }}>|</span>
                        <span>{categories[catId]}</span>
                    </Box>

                    <Box sx={{ maxWidth: "1200px", margin: "auto", display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        {/* blog content */}
                        <Box className="blogsWrapper" sx={wrapperCss}>
                            {pageData.slice(postFrom, postTo).map(post => (
                                <Box className="blogItem" sx={itemCss} key={post.id}>
                                    <Box className='blogImageWrapper'>
                                        <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
                                    </Box>
                                    <Box className='blogContent' sx={{ backgroundColor: "rgba(0,67,139,1)", padding: "32px 25px 32px 25px", marginTop: "-6px" }}>
                                        <Link to={`/posts/${post.slug}`} style={{ color: '#ffffff', textDecoration: 'none' }}>
                                            <Typography className='blogTitle' sx={BlogTitle} dangerouslySetInnerHTML={{ __html: post.title.rendered }} onClick={topScroll} />
                                        </Link>
                                        <Divider sx={{ width: "100%", height: "1px", backgroundColor: "white", margin: "15px 0px" }} />
                                        <Typography sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'open sans' }}>
                                            <span>By {post.yoast_head_json.twitter_misc['Written by']}</span>
                                            <span style={MiddleSpan}>{moment(post.date).format('MMMM Do , YYYY')}</span>
                                            <span style={{ display: 'block' }}> categories :&nbsp;
                                                <Link to={`/categories/${categories[post.categories[0]]}`} style={categoriesLinkCss} onClick={topScroll}>{categories[post.categories[0]]}</Link>
                                                <Link to={`/categories/${categories[post.categories[1]]}`} style={categoriesLinkCss} onClick={topScroll}>{post.categories[1] ? ", " + categories[post.categories[1]] : ""}</Link>
                                                <Link to={`/categories/${categories[post.categories[2]]}`} style={categoriesLinkCss} onClick={topScroll}>{post.categories[2] ? ", " + categories[post.categories[2]] : ""}</Link>
                                            </span>
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        {/* right sildebar */}
                        <Box sx={{ width: { xs: '100%', md: '33%' }, padding: { xs: '30px 0px 0px 0px', md: '0px 0px 0px 50px' } }}>
                            <Box >
                                <Typography sx={{ backgroundColor: '#f5881f', padding: '8px 11px 10px 11px', color: '#fff', fontSize: '17px', fontWeight: '800', fontFamily: 'poppins' }}>Popular Posts</Typography>
                                {popularPost[0] ? (
                                    <Box>
                                        {
                                            popularPost.map(post => (
                                                <Box key={post.id} sx={{ backgroundColor: '#ebebf4', margin: '10px 0px', padding: '10px' }}>
                                                    <Link to={`/posts/${post.slug}`} style={{ color: '#000000', textDecoration: 'none' }} onClick={topScroll} >
                                                        <Typography dangerouslySetInnerHTML={{ __html: post.title.rendered }} sx={{ fontFamily: 'open sans', fontWeight: '500' }} />
                                                    </Link>
                                                    <Typography sx={{ marginTop: '15px', fontFamily: 'open sans', color: '#5c5d66', fontSize: '14px' }}>{moment(post.date).format('MMMM Do , YYYY')}</Typography>
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                )
                                    : 'loading'}
                            </Box>
                            <Box sx={{ margin: '30px 0px' }}>
                                <Typography sx={{ backgroundColor: '#f5881f', padding: '8px 11px 10px 11px', color: '#fff', fontSize: '17px', fontWeight: '800', fontFamily: 'poppins' }}>Recent Posts</Typography>
                                {recentPost[0] ? (
                                    <Box>
                                        {
                                            recentPost.map(post => (
                                                <Box key={post.id} sx={{ backgroundColor: '#ebebf4', margin: '10px 0px', padding: '10px' }}>
                                                    <Link to={`/posts/${post.slug}`} style={{ color: '#000000', textDecoration: 'none' }} onClick={topScroll} >
                                                        <Typography dangerouslySetInnerHTML={{ __html: post.title.rendered }} sx={{ fontFamily: 'open sans', fontWeight: '500' }} />
                                                    </Link>
                                                    <Typography sx={{ marginTop: '15px', fontFamily: 'open sans', color: '#5c5d66', fontSize: '14px' }}>{moment(post.date).format('MMMM Do , YYYY')}</Typography>
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                )
                                    : 'loading'}
                            </Box>
                            <Box sx={{ boxShadow: '0px 0px 6px #ccc', borderRadius: '4px', backgroundColor: '#ffffff', position: 'relative', paddingBottom: '10px' }} >
                                <img src={newsletterImage} alt='check' />
                                <Typography sx={{ fontSize: '18px', fontFamily: 'open sans', textAlign: 'center', fontWeight: '700', textTransform: 'uppercase', position: 'absolute', top: '50px', left: '50%', transform: 'translate(-50%)', color: '#ffffff', width: '280px' }}>Never Miss the Latest News</Typography>
                                <Box sx={{ width: '135px', height: '125px', margin: 'auto', position: 'relative', top: '-60px' }}>
                                    <img src={EmailIcon} alt='check' />
                                </Box>
                                <Typography sx={{ textAlign: 'center', color: '#f5881f', fontSize: '16px', fontFamily: 'poppins', fontWeight: '500', position: 'relative', top: '-30px' }}>Newsletter Signup</Typography>
                                <Box className="letterInputParent">
                                    <TextField id="filled-basic" label="Email Your Address" variant="filled" sx={{ width: '100%', padding: '0px 20px' }} className='newsletterEmailInput' />
                                </Box>
                                <Box sx={{ margin: '30px 20px 20px 20px' }}>
                                    <Button color='warning' variant="contained" sx={{ borderRadius: '4px', height: '45px', fontSize: '16px', width: '100%' }} id='letternewsBtn' >Subscribe</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ maxWidth: "1200px", margin: "auto", marginTop: '50px' }}>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={<ArrowRightIcon sx={{ marginTop: '6px' }} fontSize='large' />}
                            onPageChange={paginationfun}
                            pageRangeDisplayed={2}
                            pageCount={pageCount}
                            previousLabel={<ArrowLeftIcon sx={{ marginTop: '6px' }} fontSize='large' />}
                            renderOnZeroPageCount={null}
                            marginPagesDisplayed={1}
                        />
                    </Box>

                </Box>
            )
                : <Box sx={loaderCss}><Box style={{ width: '149px' }}> <span>Loading</span><span className='ani'>...</span></Box></Box>}

        </>
    )
}
