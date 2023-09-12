import React, { useState } from 'react'
import Navbar from '../../../Components/adminNavbar'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from '../../../url';
export default function Default() {
    const [userData, setuserData] = useState({
        'name': '',
        'email': '',
        'password': ''
    })
    const onChangeHandle = (event) => {
        setuserData({ ...userData, [event.target.name]: event.target.value })
    }
    const addUser = async (event) => {
        event.preventDefault();
        await fetch(`${url}/api/admin/user/create-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': userData.name,
                'email': userData.email,
                'password': userData.password
            })
        }).then(res => res.json()).then(response => {
            if (response.status) {
                toast.success('User added sucessfully', {
                    position: toast.POSITION.TOP_RIGHT
                });
                setuserData({
                    'name': '',
                    'email': '',
                    'password': ''
                })
            }
            else {
                toast.error(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    }
    return (
        <div style={{ minHeight: '80vh' }}>
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
            <Container>
                <Box textAlign={'center'}>
                    <Typography sx={{
                        fontSize: {
                            sm: '24px',
                            md: '28px',
                            lg: '32px'
                        },
                        paddingBottom: '20px'
                    }} fontFamily={'Poppins'}>Add a admin user</Typography>
                </Box>
                <form onSubmit={addUser} style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Box>
                        <TextField value={userData.name} name='name' onChange={onChangeHandle} required sx={{
                            marginRight: '20px',

                        }} label='user name' />
                        <TextField type='email' value={userData.email} name='email' onChange={onChangeHandle} required sx={{
                            marginRight: '20px',

                        }} label='email' />
                        <TextField type='password' value={userData.password} name='password' onChange={onChangeHandle} required sx={{
                            marginRight: '20px',

                        }} label='password' />
                    </Box>
                    <Box>
                        <Button sx={{
                            padding: '15px 30px',

                        }} type='submit' variant='contained'>Add user</Button>
                    </Box>
                </form>
            </Container>
        </div>
    )
}
