import { Box, Button, Container, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../../Components/adminNavbar'
import allVehiclesContext from '../../../Pages/All Vehicles/All Vehicle State/allVehiclesContext'
import { useSelector } from 'react-redux';
import iconDelete from '../../../Assets/icon_delete.png'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from '../../../url';
export default function Default() {
    const Vehicles = useContext(allVehiclesContext);
    const allVehicles = useSelector(state => state.AllVehicles);
    const { getVehicleData } = Vehicles;
    const [showWarning, setShowWarning] = useState(false);
    const [id, setId] = useState("")
    const navigator = useNavigate();
    useEffect(() => {
        getVehicleData();
    }, [])
    const deleteListing = async () => {
        await fetch(`${url}/api/listings/deleteListing`, {
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
            getVehicleData();
        })
    }
    return (
        <><ToastContainer
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
            {showWarning && <div
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
                    borderRadius:'16px'
                }}
            >
                <Box
                    style={{
                        height: '250px',
                        width: '600px',
                        backgroundColor: 'white',
                        border: '1px solid black',
                        textAlign: 'center',
                        borderRadius:'16px'
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
            {allVehicles ? <Container sx={{ paddingTop: '12vh', marginBottom:'40px' }}>
            <Box textAlign={'center'}>
                    <Typography sx={{
                        fontSize:{
                            sm:'24px',
                            md: '28px',
                            lg:'32px'
                        },
                        paddingBottom:'20px'
                    }} fontFamily={'Poppins'}>View or Delete Vehicles</Typography>
                </Box>
                {allVehicles.map((vehicle, index) => <Box key={index} sx={{
                    width: '100%',
                    border: '1px solid #00000012',
                    height: '70px',
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    boxShadow:'0px 0px 4px 0px #00000012',
                    borderRadius:'16px',
                    backgroundColor:'white'
                }}>
                    <Box sx={{ 'padding': '2vh 0px 15px 25px', }}>
                        <Typography>{vehicle.name}</Typography>
                        <Typography>{vehicle.rentInCity}</Typography>
                    </Box>
                    <img onClick={() => {
                        setId(vehicle._id)
                        setShowWarning(true)

                    }} style={{
                        'padding': '20px',
                        cursor: 'pointer'
                    }} src={iconDelete} />
                </Box>)}
            </Container> : <Container>
            <center><Typography variant='h4'>No vehicles no display</Typography></center>
            </Container>}<br/><br/><br/>
        </>
    )
}
