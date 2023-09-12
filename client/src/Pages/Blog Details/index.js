import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Navbar from '../../Components/NavBar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addBlogs } from '../../States/action-creators';
import url from '../../url';
export default function Default() {
    const { id } = useParams()
    const Blogs = useSelector(state => state.Blogs);
    const dispatch = useDispatch();
    const getData = async () => {
        await fetch(`${url}/api/blog/getBlogs`).then(res => res.json()).then(response =>{
            dispatch(addBlogs(response.blogs))
        });
    }
    useEffect(() => {
        getData();// eslint-disable-next-line
    }, [])
    return (
        <Box >
            <Navbar />
            {(Blogs[0] && id < Blogs.length) ?
                <Box paddingBottom={'5vh'} style={{ paddingTop: '8vh', backgroundColor: '#a0c9c3' }}>
                    <img style={{
                        height: "400px",
                        width: '100vw'
                    }} src={`${url}/${Blogs[id].coverImage}`} />
                    <Container >
                        <center><Typography sx={{
                            paddingTop: '40px',
                            color: 'white',
                            fontSize: {
                                sm: '26px',
                                md: '28px',
                                lg: '32px',
                                xl: '32px'
                            }
                        }}>{Blogs[id].title}</Typography></center>
                        <Typography sx={{
                            paddingTop: '40px',
                            color: 'white',
                            fontSize: {
                                sm: '16px',
                                md: '16px',
                                lg: '16px',
                                xl: '16px'
                            }
                        }}>{Blogs[id].description}</Typography>
                        {Blogs[id].subHeadings && Blogs[id].subHeadings.map((item, index) => <Box>
                            <Typography fontWeight={'600'} fontSize={'20px'} color={'white'}>
                                {item.title}
                            </Typography>
                            <Typography sx={{
                        
                                color: 'white',
                                fontSize: {
                                    sm: '16px',
                                    md: '16px',
                                    lg: '16px',
                                    xl: '16px'
                                }
                            }}>
                                {item.description}
                            </Typography>
                        </Box>)}
                    </Container>
                </Box> : <Box sx={{
                    minHeight: '100vh',
                    textAlign: 'center',
                    paddingTop: '2vh'
                }}>
                    <Typography variant='h4'>No Details were found for the requested blog</Typography>
                </Box>
            }
        </Box>
    )
}
