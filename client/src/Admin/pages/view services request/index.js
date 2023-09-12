import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/adminNavbar'
import { Box, Container, Grid, Typography } from '@mui/material'
import url from '../../../url'

export default function Default() {
    const [formsData, setformsData] = useState([])
    const getSubmittedRequests = async () => {
        await fetch(`${url}/api/requests/getRequests`).then(res => res.json()).then(response => {
            if (response.status) { setformsData(response.Requests); }
            else {
                alert(response.error)
            }
        })
    }
    useEffect(() => {
        getSubmittedRequests();
    }, [])

    return (
        <>
            <Navbar />
            <Container>
            <Box textAlign={'center'}>
                    <Typography sx={{
                        fontSize:{
                            sm:'24px',
                            md: '28px',
                            lg:'32px'
                        },
                        paddingBottom:'20px'
                    }} fontFamily={'Poppins'}>View Customers services requests</Typography>
                </Box>
                <Grid style={{marginTop:'30px', marginBottom:'30px'}} spacing={2} container>
                    {formsData.map((data, index) => <Grid key={index} item xs={12} sm={6}>
                        <Box sx={{
                            height: '200px',
                            border: '1px solid #00000012',
                            padding: '20px'
                        }}>
                            <Typography><b>Customer Name:</b> {data.name}</Typography>
                            <Typography><b>Customer Email:</b> {data.email}</Typography>
                            <Typography><b>Customer Phone:</b> {data.phone}</Typography>
                            <Typography><b>Customer City:</b> {data.city}</Typography>
                            <Typography><b>Customer Description:</b> {data.description}</Typography>
                        </Box>
                    </Grid>)}

                </Grid>
            </Container>
        </>
    )
}
