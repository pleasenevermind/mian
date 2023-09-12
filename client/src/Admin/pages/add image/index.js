import React, { useState } from 'react'
import Navbar from '../../../Components/adminNavbar'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from '../../../url';
export default function Default() {
    const [image, setImage] = useState(null);

    const handleFileInput = (event) => {
        setImage(event.target.files[0])
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', image);


        if(image){
            axios.post(`${url}/api/gallery/postImages`, formData)
            .then(response => {
                if (response.status) {
                    toast.success('Image uploaded Sucessfully', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    setImage(null)
                }
                else {
                    toast.error('Error while uploading Image', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })
        }
        else{
            toast.error('Select an Image to continue', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
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
            <Container sx={{ marginBottom: '40px', paddingTop:'12vh'  }}>
                <Box textAlign={'center'}>
                    <Typography sx={{
                        fontSize: {
                            sm: '24px',
                            md: '28px',
                            lg: '32px'
                        },
                        paddingBottom: '20px'
                    }} fontFamily={'Poppins'}>Add Image</Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField required sx={{ width: '100%' }} onChange={handleFileInput} type='file' /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12}>
                            <center>
                                <Button sx={{ height: '60px', width: '30%' }} variant='contained' type='submit'>Add Image</Button>
                            </center>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    )
}
