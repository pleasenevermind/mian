import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import { Box, Grid, Typography } from '@mui/material'
import url from '../../url'
import { useLocation } from 'react-router-dom'

export default function Default() {
  const [vehicleData, setvehicleData] = useState({

  })
  const location = useLocation();
  const newSearch = location.search.substring(4);
  const getData = async () => {

    console.log(newSearch)
    await fetch(`${url}/api/listings/getSpecificListing?id=${newSearch}`).then(res => res.json())
      .then(response => {
        setvehicleData(response)
        console.log(response)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: '#a0c9c3' }}>
        <div className='lp-spacing'>
          {/* <center><p className='lp-head'>GHOST</p></center> */}
          <Grid container className='lp-first' sx={{
            paddingTop: {
              xs: '0px',
              sm: '0px',
              md: '80px',
              lg: '80px'
            }
          }}>
            <Grid item xs={12} sm={12} md={6} lg={6} style={{ color: 'white' }}>
              <p className='lp-f-head'>{vehicleData.name}</p>
              <li>Fuel: {vehicleData.fuel}</li>
              <li>Rent in city: {vehicleData.rentInCity}</li>
              <li>Color: {vehicleData.color}</li><br /><br />
              <a target='_blank' href='https://wa.me/+923351577745' style={{
                padding: '10px 30px',
                backgroundColor: 'black',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px'
              }}>Book Now</a>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}><img alt='back' style={{
              marginTop: '50px'
            }} src={`${url}/${vehicleData.image}`} /></Grid>
          </Grid>
        </div>
      </div>
      <Box style={{ backgroundColor: '#a0c9c3' , color: 'white', paddingTop: '40px' }}>
        <div className='lp-spacing'>
          <center>
            <Typography variant='h2'>
              {vehicleData.name}
            </Typography>
          </center>
          <Typography variant='h5'>
            PRICE
          </Typography>
          <Box marginLeft={'50px'} paddingTop={'20px'}>
            <Typography variant='h5'>
              The vehicle is available to rent with the compatitive pricing in the marting with  only
              PKR {vehicleData.rentInCity} /- within city and  PKR {vehicleData.rentOutOfCity} /- out of city.
            </Typography>
          </Box>
          <Grid container columnSpacing={10} marginTop={'80px'}>
            {vehicleData.secondaryImages && vehicleData.secondaryImages.length > 0 && vehicleData.secondaryImages.map((item) => <Grid item xs={6} sm={4} md={4} lg={4}><img height='90%' width='90%' src={`${url}/${item}`} /></Grid>)}
          </Grid>
        </div><br /><br /><br />
      </Box>
    </div>
  )
}
