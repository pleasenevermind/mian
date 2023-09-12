import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../../Components/adminNavbar'
import { addBlogs } from '../../../States/action-creators';
import { useSelector, useDispatch } from 'react-redux';
import iconDelete from '../../../Assets/icon_delete.png'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from '../../../url';

export default function Default() {
    const dispatch = useDispatch();
    const Blogs = useSelector(state => state.Blogs);
    const getData = async () => {
        await fetch(`${url}/api/blog/getBlogs`).then(res => res.json()).then(response => dispatch(addBlogs(response.blogs)));
    }
    useEffect(() => {
        getData();// eslint-disable-next-line
    }, [])
    const [showWarning, setShowWarning] = useState(false);
    const [id, setId] = useState("")
    const navigator = useNavigate();

    const deleteListing = async () => {
        await fetch(`${url}/api/blog/deleteblog`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                listingId: id
            })
        }).then(res => res.json()).then(response => {
            if(response.status){
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            else{
                toast.error(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            getData();
        })
    }
    return (
        <> <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    /> {showWarning && <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color for the overlay
                zIndex: 111,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '16px'
            }}
        >
            <Box
                style={{
                    height: '250px',
                    width: '600px',
                    backgroundColor: 'white',
                    border: '1px solid black',
                    textAlign: 'center',
                    borderRadius: '16px'
                }}
            >
                <Typography variant="h6" marginTop={'20px'}>
                    Are You Sure You want to delete this item? This can not be reversed
                </Typography>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '100px 40px 0px 40px',
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={() => {
                            setShowWarning(false);
                            setId('');
                        }}
                        style={{
                            backgroundColor: 'green',
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setShowWarning(false);
                            deleteListing();
                        }}
                        style={{
                            backgroundColor: 'red',
                        }}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
        </div>}
            <Navbar />
            <Container style={{ marginTop: '40px', paddingTop:'12vh' }}>
                <Box textAlign={'center'}>
                    <Typography sx={{
                        fontSize:{
                            sm:'24px',
                            md: '28px',
                            lg:'32px'
                        },
                        paddingBottom:'20px'
                    }} fontFamily={'Poppins'}>View or Delete Blogs</Typography>
                </Box>
                <Grid container spacing={2}>
                    {Blogs && Blogs.map((blog, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <Box style={{ boxShadow: '0px 0px 4px 0px #00000012', }} height={'400px'} border={'1px solid #00000012'}>
                            <img style={{
                                maxHeight:'200px',
                                width: '100%'
                            }} src={`${url}/${blog.image}`} alt='' />
                            <Typography>Title : {blog.title}</Typography>
                            <Typography>Date Posted : {blog.date.trim().substring(0, 10)}</Typography>
                            <Box textAlign={'center'} border={'1px solid #00000012'}>
                                <img onClick={() => {
                                    setId(blog._id)
                                    setShowWarning(true)

                                }} style={{
                                    'padding': '20px',
                                    cursor: 'pointer',
                                    'height': '10%',
                                    width: '10%'
                                }} src={iconDelete} />
                            </Box>
                        </Box>
                    </Grid>)}
                </Grid>
            </Container><br/><br/><br/>
        </>
    )
}
