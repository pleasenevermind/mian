import React, { useEffect } from 'react'
import AdminNavbar from '../../../Components/adminNavbar'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Default() {
  const navigator = useNavigate();
  const availableButtons = [
    {
      "name": "View or Delete Vehicles",
      "path": "/admin/home/ViewAllVehicles"
    },
    {
      "name": "View or Delete Images",
      "path": "/admin/home/ViewAllImages"
    },
    {
      "name": "View or Delete Blogs",
      "path": "/admin/home/ViewAllBlogs"
    },
    {
      "name": "View Services Requests",
      "path": "/admin/home/viewServicesRequests"
    },
    {
      "name": "Add User",
      "path": "/admin/home/adduser"
    },
    {
      "name": "Add Vehicle",
      "path": "/admin/home/addvehicle"
    },
    {
      "name": "Add Blog",
      "path": "/admin/home/addBlog"
    },
    {
      "name": "Add Image",
      "path": "/admin/home/addImage"
    },
    {
      "name": "Add Offer",
      "path": "/admin/home/offer"
    },
    {
      "name": "View or Delete Offer",
      "path": "/admin/home/viewalloffers"
    },
    {
      "name": "Change Password",
      "path": "/admin/home/changepassword"
    }
  ]
  const handleLogout = () => {
    localStorage.clear();
    navigator("/admin")
  }
  if (!localStorage.getItem("token")) {
    console.log("token")
    console.log(localStorage.getItem("token"))
    return <Container>
      <center><Typography variant='h4' fontFamily={'poppins'}>You Don't have access to see this page</Typography></center>
    </Container>
  }
  return (
    <div>
      <AdminNavbar />
      <Container style={{ "borderBottom": "1px solid black", paddingTop:'12vh' }}>
        <Button onClick={handleLogout} style={{ "margin": "1% 1% 1% 90%" }} variant='contained'>
          Logout
        </Button>
      </Container>
      <Container sx={{marginTop:'2vh', marginBottom:'2vh'}}>
        <Grid container spacing={2}>
          {availableButtons.map((btn, index) => <Grid key={index} item sm={6} md={4} lg={3} xl={3}>
            <Link to={btn.path} style={{textDecoration:'none',}}><Box sx={{
              height: '100px',
              border: '1px solid #00000012',
              borderRadius: '10px',
              backgroundColor: '#00000012',
              display: 'flex', // Add this to make the Box a flex container
              alignItems: 'center', // Center the child elements vertically
              justifyContent: 'center',
              color: 'black'
               // Center the child elements horizontally
            }}>
              <Typography fontSize={'1.5em'}>{btn.name}</Typography>
            </Box></Link>
          </Grid>)}
        </Grid>
      </Container>
    </div>
  )
}
