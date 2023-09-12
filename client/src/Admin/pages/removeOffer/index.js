import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/adminNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { addImagesCarGaller } from '../../../States/action-creators'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import iconDelete from '../../../Assets/icon_delete.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from '../../../url';
export default function Default() {
    const [wedding, setwedding] = useState([]);
    const [rental, setrental] = useState([]);
    const [business, setbusiness] = useState([]);
    const getData = async () => {
        await fetch(`${url}/offers/get`)
            .then(res => res.json())
            .then(response => {
                console.log(response.result)
                 if(response.result){
                    response.result.map((item) => {
                        if (item.type === 'wedding') {
                            let status = false;
                            setwedding(prevState=>{
                                let newState = [...prevState]
                                if(newState.length > 0){
                                    newState.map((item1)=>{
                                        if(item1._id === item._id){
                                            console.log(item._id, ' ', item1._id)
                                            status = true

                                        }
                                    })
                                }
                                if(!status){
                                    newState.push(item)
                                }
                                return newState
                            })
                        }
                        else if (item.type === 'rental') {
                            let status = false;
                            setrental(prevState=>{
                                let newState = [...prevState]
                                if(newState.length > 0){
                                    newState.map((item1)=>{
                                        if(item1._id === item._id){
                                            console.log(item._id, ' ', item1._id)
                                            status = true

                                        }
                                    })
                                }
                                if(!status){
                                    newState.push(item)
                                }
                                return newState
                            })
                        }
                        else { 
                            let status = false;
                            setbusiness(prevState=>{
                                let newState = [...prevState]
                                if(newState.length > 0){
                                    newState.map((item1)=>{
                                        if(item1._id === item._id){
                                            console.log(item._id, ' ', item1._id)
                                            status = true

                                        }
                                    })
                                }
                                if(!status){
                                    newState.push(item)
                                }
                                return newState
                            })
                        }
                    })
                 }
                 else{
                    toast.error(response.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                 }
            });
    }

    //Calling getData when the page loads
    useEffect(() => {
        getData();// eslint-disable-next-line
    }, [])
    const [showWarning, setShowWarning] = useState(false);
    const [id, setId] = useState("")

    const deleteListing = async () => {
        await fetch(`${url}/offers/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                listingId: id
            })
        }).then(res => res.json()).then(response => {
            if (response.status) {
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                getData();
            }
            else {
                toast.error(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }

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
        />{showWarning && <div
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
            <Container style={{ paddingTop: '12vh' }}>
                <Box textAlign={'center'}>
                    <Typography sx={{
                        fontSize: {
                            sm: '24px',
                            md: '28px',
                            lg: '32px'
                        },
                        paddingBottom: '20px'
                    }} fontFamily={'Poppins'}>View or Delete Images</Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}><Typography variant='h2'>Wedding Offers</Typography></Grid>
                    {wedding.length > 0 ? wedding.map((image, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <Box style={{ boxShadow: '0px 0px 4px 0px #00000012', }} height={'400px'} border={'1px solid #00000012'}>
                            <img style={{
                                height: '300px',
                                width: '100%'

                            }} src={`${url}/${image.image}`} alt='' />

                            <Box textAlign={'center'} border={'1px solid #00000012'}>
                                <img onClick={() => {
                                    setId(image._id)
                                    setShowWarning(true)

                                }} style={{
                                    'padding': '20px',
                                    cursor: 'pointer',
                                    'height': '10%',
                                    width: '10%'
                                }} src={iconDelete} />
                            </Box>
                        </Box>
                    </Grid>) : <center><Typography>Nothing to display</Typography></center>}
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}><Typography variant='h2'>Rental Offers</Typography></Grid>
                    {rental.length > 0 ? rental.map((image, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <Box style={{ boxShadow: '0px 0px 4px 0px #00000012', }} height={'400px'} border={'1px solid #00000012'}>
                            <img style={{
                                height: '300px',
                                width: '100%'

                            }} src={`${url}/${image.image}`} alt='' />

                            <Box textAlign={'center'} border={'1px solid #00000012'}>
                                <img onClick={() => {
                                    setId(image._id)
                                    setShowWarning(true)

                                }} style={{
                                    'padding': '20px',
                                    cursor: 'pointer',
                                    'height': '10%',
                                    width: '10%'
                                }} src={iconDelete} />
                            </Box>
                        </Box>
                    </Grid>): <center><Typography>Nothing to display</Typography></center>}
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}><Typography variant='h2'>Bussiness Offers</Typography></Grid>
                    {business.length > 0 ? business.map((image, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <Box style={{ boxShadow: '0px 0px 4px 0px #00000012', }} height={'400px'} border={'1px solid #00000012'}>
                            <img style={{
                                height: '300px',
                                width: '100%'

                            }} src={`${url}/${image.image}`} alt='' />

                            <Box textAlign={'center'} border={'1px solid #00000012'}>
                                <img onClick={() => {
                                    setId(image._id)
                                    setShowWarning(true)

                                }} style={{
                                    'padding': '20px',
                                    cursor: 'pointer',
                                    'height': '10%',
                                    width: '10%'
                                }} src={iconDelete} />
                            </Box>
                        </Box>
                    </Grid> ): <center><Typography>Nothing to display</Typography></center>}
                </Grid>
            </Container>
        </>
    )
}
