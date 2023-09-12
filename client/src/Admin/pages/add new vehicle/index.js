import React, { useState } from 'react'
import Navbar from '../../../Components/adminNavbar'
import { Box, Button, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from '../../../url';
export default function Default() {
    const [image, setImage] = useState('');
    const [secondaryImage, setSecondaryImage] = useState([]);
    const [vehicleData, setvehicleData] = useState({
        'name': '',
        'color': '',
        'rentInCity': '',
        'rentOutOfCity': '',
        'fuel': 'peterol',
        'seating': '4',
        'transmission': 'auto',
        'description': ''
    })
    const handleFileInput = (event) => {
        setImage(event.target.files[0])
    }
    const handleSecondaryInput = async (event) => {
        const formData = new FormData();
        formData.append('image',event.target.files[0])
        await fetch(`${url}/uploadImage/upload`,{
            method:'POST',
            body:formData
        }).then(res=>res.json()).then(response=>{
            console.log(response)
            setSecondaryImage(prevState=>{
            let newState = [...prevState];
            newState.push(response.result)
            return newState
        })
        })
        
    }
    const handleImageInput = async (event) => {
        const formData = new FormData();
        formData.append('image',event.target.files[0])
        await fetch(`${url}/uploadImage/upload`,{
            method:'POST',
            body:formData
        }).then(res=>res.json()).then(response=>{
            setImage(response.result)
        })
        
    }
    const handleInputChange = (event) => {
        setvehicleData({ ...vehicleData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        console.log(secondaryImage)
        event.preventDefault();
        await fetch(`${url}/api/listings/postData`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:vehicleData.name,
                color:vehicleData.color,
                rentInCity:vehicleData.rentInCity,
                rentOutOfCity:vehicleData.rentOutOfCity,
                fuel:vehicleData.fuel,
                seating:vehicleData.seating,
                transmission:vehicleData.transmission,
                description:vehicleData.description,
                secondaryImages:secondaryImage,
                image:image,
            })
        }).then(response => {
            if (response.status) {
                toast.success('Vehicle Added Sucessfully', {
                    position: toast.POSITION.TOP_RIGHT
                });
                setvehicleData({
                    'name': '',
                    'color': '',
                    'rentInCity': '',
                    'rentOutOfCity': '',
                    'fuel': 'peterol',
                    'seating': '4',
                    'transmission': 'auto',
                    'description': ''
                })

                setImage(null)
            }
            else {
                toast.error('Error while uploading vehicle', {
                    position: toast.POSITION.TOP_RIGHT
                });
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
            <Container sx={{ marginBottom: '40px' , paddingTop:'12vh'}}>
                <Box textAlign={'center'}>
                    <Typography sx={{
                        fontSize: {
                            sm: '24px',
                            md: '28px',
                            lg: '32px'
                        },
                        paddingBottom: '20px'
                    }} fontFamily={'Poppins'}>Add Vehicle</Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField required sx={{ width: '100%' }} onChange={handleImageInput} type='file' /></center>
                            </Box>
                        </Grid>
                        <Typography variant='h4' paddingLeft={'30px'} paddingTop={'30px'}>Select 3 Images</Typography>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField required sx={{ width: '100%' }} onChange={handleSecondaryInput} type='file' /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField required sx={{ width: '100%' }} onChange={handleSecondaryInput} type='file' /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Box>
                                <center><TextField required sx={{ width: '100%' }} onChange={handleSecondaryInput} type='file' /></center>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <center><TextField required sx={{ width: '100%' }} value={vehicleData.name}
                                onChange={handleInputChange} name='name'
                                label='Name' type='text' /></center>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <center><TextField required sx={{ width: '100%' }} value={vehicleData.color}
                                onChange={handleInputChange} name='color'
                                label='color' type='text' /></center>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <center><TextField required sx={{ width: '100%' }} value={vehicleData.rentInCity}
                                onChange={handleInputChange} name='rentInCity'
                                label='Rent Within City' type='number' /></center>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <center><TextField required sx={{ width: '100%' }} value={vehicleData.rentOutOfCity}
                                onChange={handleInputChange} name='rentOutOfCity'
                                label='Rent out of city' type='number' /></center>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <center>
                                <Select required sx={{ width: '100%' }} name='fuel' labelId='demo-simple-select-label' value={vehicleData.fuel} label='Fuel' onChange={handleInputChange}>
                                    <MenuItem value='peterol'>Peterol</MenuItem>
                                    <MenuItem value='diesel'>Diesel</MenuItem>
                                    <MenuItem value='hiOctane'>Hi-Octane</MenuItem>
                                </Select>
                            </center>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <center>
                                <Select required sx={{ width: '100%' }} name='seating' labelId='demo-simple-select-label' value={vehicleData.seating} label='Fuel' onChange={handleInputChange}>
                                    <MenuItem value='2'>2</MenuItem>
                                    <MenuItem value='4'>4</MenuItem>
                                    <MenuItem value='6'>6</MenuItem>
                                    <MenuItem value='8'>8</MenuItem>
                                    <MenuItem value='10'>10</MenuItem>
                                    <MenuItem value='12'>12</MenuItem>
                                    <MenuItem value='14'>14</MenuItem>
                                    <MenuItem value='16'>16</MenuItem>
                                    <MenuItem value='18'>18</MenuItem>
                                    <MenuItem value='20'>20</MenuItem>
                                    <MenuItem value='22'>22</MenuItem>
                                    <MenuItem value='24'>24</MenuItem>
                                    <MenuItem value='26'>26</MenuItem>
                                </Select>
                            </center>
                        </Grid>
                        <Grid item sm={12} md={6} lg={4}>
                            <center>
                                <Select required sx={{ width: '100%' }} name='transmission' labelId='demo-simple-select-label' value={vehicleData.transmission} label='Transmission' onChange={handleInputChange}>
                                    <MenuItem value='auto'>Auto</MenuItem>
                                    <MenuItem value='manual'>Manual</MenuItem>
                                </Select>
                            </center>
                        </Grid>
                        <Grid item sm={12} md={6} lg={8}>
                            <center><TextField required sx={{ width: '100%' }} inputProps={{
                                maxLength: 300, // Set the maximum allowed characters
                            }} value={vehicleData.description}
                                onChange={handleInputChange} name='description'
                                label='Description' type='text' /></center>
                        </Grid>
                        <Grid item sm={12}>
                            <center>
                                <Button sx={{ height: '60px', width: '30%' }} variant='contained' type='submit'>Add Vehicle</Button>
                            </center>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    )
}
