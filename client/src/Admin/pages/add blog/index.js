import React, { useState } from 'react'
import Navbar from '../../../Components/adminNavbar'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from '../../../url';
export default function Default() {
    const [image, setImage] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [currentSubheading, setcurrentSubheading] = useState({
        'title': '',
        'description': ''
    });
    const [addedSubheading, setaddedSubheading] = useState([]);
    const [SubheadingIds, setSubheadingIds] = useState([]);
    const [blogData, setBlogData] = useState({
        'title': '',
        'description': ''
    })
    const handleInputChange = (event) => {
        setBlogData({ ...blogData, [event.target.name]: event.target.value })
    }
    const handleImageInput = async (event) => {
        const formData = new FormData();
        formData.append('image', event.target.files[0])
        await fetch(`${url}/uploadImage/upload`, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(response => {
            setImage(response.result)
        })

    }
    const handleCoverImageInput = async (event) => {
        const formData = new FormData();
        formData.append('image', event.target.files[0])
        await fetch(`${url}/uploadImage/upload`, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(response => {
            setCoverImage(response.result)
        })

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(true){
            console.log(SubheadingIds)
            await fetch(`${url}/api/blog/postBlog`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    title:blogData.title,
                    description:blogData.description,
                    image:image,
                    coverImage:coverImage,
                    subHeadings:SubheadingIds
                })
            }).then(res=>res.json())
                .then(response => {
                    console.log(response)
                    if (response.status) {
                        toast.success('Blog uploaded Sucessfully', {
                            position: toast.POSITION.BOTTOM_RIGHT
                        });
                        setaddedSubheading([])
                        setBlogData({
                            'title': '',
                            'description': ''
                        })
    
                        setImage(null)
                    }
                    else {
                        toast.error('Error while uploading Blogs', {
                            position: toast.POSITION.BOTTOM_RIGHT
                        });
                    }
                })
        }
    }
    const onSubheadingAdd = async () => {
        setaddedSubheading(prevState => {
            let newState = [...prevState];
            newState.push(currentSubheading);
            return newState;
        })
        await fetch(`${url}/api/blog/postSubheadings`, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "title": currentSubheading.title,
                "description": currentSubheading.description
            })
        }).then(res => res.json()).then(response => {
            if (response.status) {
                setSubheadingIds(prevState=>{
                    let newState = [...prevState]
                    newState.push(response.result._id)
                    return newState;
                })
                setcurrentSubheading({
                    'title': '',
                    'description': ''
                })
            }
            else {
                toast.error(response.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            }
        })

    }
    return (
        <>
            <ToastContainer
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
            />
            <Navbar />
            <Container sx={{ marginBottom: '40px', paddingTop: '12vh' }}>
                <Box textAlign={'center'}>
                    <Typography sx={{
                        fontSize: {
                            sm: '24px',
                            md: '28px',
                            lg: '32px'
                        },
                        paddingBottom: '20px'
                    }} fontFamily={'Poppins'}>Add Blog</Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <Typography>Select Cover Image</Typography>
                                <center><TextField required sx={{ width: '100%' }} onChange={handleCoverImageInput} type='file' /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <Typography>Select Display Image</Typography>
                                <center><TextField required sx={{ width: '100%' }} onChange={handleImageInput} type='file' /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField required sx={{ width: '100%' }} value={blogData.title}
                                    onChange={handleInputChange} name='title'
                                    label='Enter Blog Title' type='text' inputProps={{ maxLength: 130 }} /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField required sx={{ width: '100%' }} value={blogData.description}
                                    rows={5}
                                    multiline
                                    onChange={handleInputChange} name='description'
                                    label='Description' type='text' /></center>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container rowSpacing={5} style={{ border: '1px solid black', margin: '10px 0px', padding: '10px' }}>
                        <Grid item sm={12} md={12}>
                            <center><Typography>ADDED SUB-HEADINGS</Typography></center>
                        </Grid>
                        {addedSubheading?.map((item, index) => {
                            return <Grid item sm={12} md={12} >
                                <Box style={{
                                    border: '1px solid black', borderRadius: '10px',
                                    padding: '10px'
                                }}>
                                    <Typography fontWeight={'600'}>Heading</Typography>
                                    <Typography>{item.title}</Typography>
                                    <Typography fontWeight={'600'}>Description</Typography>
                                    <Typography>{item.description}</Typography>
                                </Box>

                            </Grid>
                        })}
                        <Grid item sm={12} md={12}>
                            <center><Typography>ADD SUB-HEADINGS</Typography></center>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField sx={{ width: '100%' }} value={currentSubheading.title}
                                    onChange={(val) => {
                                        setcurrentSubheading({ ...currentSubheading, [val.target.name]: val.target.value })
                                    }} name='title'
                                    label='Sub-Heading Title' type='text' inputProps={{ maxLength: 130 }} /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField sx={{ width: '100%' }} value={currentSubheading.description}
                                    rows={5}
                                    multiline
                                    onChange={(val) => {
                                        setcurrentSubheading({ ...currentSubheading, [val.target.name]: val.target.value })
                                    }} name='description'
                                    label='Sub-Heading Description' type='text' /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12}>
                            <center>
                                <Button sx={{ height: '30px', width: '20%' }} variant='contained' onClick={onSubheadingAdd}>Add Sub-Heading</Button>
                            </center>
                        </Grid>
                    </Grid>
                    <center>
                        <Button sx={{ height: '60px', width: '30%' }} variant='contained' type='submit'>Add Blog</Button>
                    </center>
                </form>
            </Container>
        </>
    )
}
