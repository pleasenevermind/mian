import React, { useState } from 'react'
import Navbar from '../../../Components/adminNavbar'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from '../../../url';
export default function Default() {
    const [passwordData, setPasswordData] = useState({
        'current_password': '',
        'new_password': '',
        're_new_password': '',
    })
    const handleInputChange = (event) => {
        setPasswordData({ ...passwordData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(passwordData.new_password === passwordData.re_new_password){
            console.log(localStorage.getItem('token'))
            axios.put(`${url}/api/admin/user/change-password?user_id=${localStorage.getItem('id')}&current_password=${passwordData.current_password}&new_password=${passwordData.new_password}`)
            .then(response => {
                console.log(response)
                if (response.data.status) {
                    console.log(response.data.status)
                    toast.success(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });

                }
                else {
                    toast.error(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })
        }
        else{
            toast.error('password and confirm password did not matched', {
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
            <Container style={{paddingTop:'12vh'}}>
                <Box textAlign={'center'}>
                    <Typography sx={{
                        fontSize: {
                            sm: '24px',
                            md: '28px',
                            lg: '32px'
                        },
                        paddingBottom: '20px'
                    }} fontFamily={'Poppins'}>Change Password</Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField required sx={{ width: '100%' }} value={passwordData.current_password}
                                    onChange={handleInputChange} name='current_password'
                                    label='Enter Current Password' type='password' inputProps={{ maxLength: 130 }} /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField required sx={{ width: '100%' }} value={passwordData.new_password}
                                    onChange={handleInputChange} name='new_password'
                                    label='Enter New Password' type='password' inputProps={{ maxLength: 130 }} /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField required sx={{ width: '100%' }} value={passwordData.re_new_password}
                                    onChange={handleInputChange} name='re_new_password'
                                    label='Re-Enter New Password' type='password' inputProps={{ maxLength: 130 }} /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12}>
                            <center>
                                <Button sx={{ height: '60px', width: '30%' }} variant='contained' type='submit'>Change</Button>
                            </center>
                        </Grid>
                    </Grid>
                </form><br/><br/><br/>
            </Container>
        </>
    )
}
