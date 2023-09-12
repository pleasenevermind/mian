import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './index.css'
import Navbar from '../../Components/NavBar/Navbar';
import url from '../../url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
export default function Default(props) {
  const [hideForm, setHideForm] = useState(true);
  const [data, setData] = useState({
    "name":"",
    "email":"",
    "phone":"",
    "city":"",
    "description":"",
  })
  const onChangeHandle = (val)=>{
    setData({...data, [val.target.name]:val.target.value})
  }
  const handlePostData = async (val) =>{
    val.preventDefault();
    await fetch(`${url}/api/requests/postRequest`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        "name":data.name,
        "email":data.email,
        "phone":data.phone,
        "city":data.city,
        "description":data.description
      })
    }).then(res=>res.json()).then(response=>{
      console.log(response)
      if(response.msg){
        toast.success('Form Submission Successfull',{
          position:toast.POSITION.BOTTOM_RIGHT
        })
        setData({
          "name":"",
          "email":"",
          "phone":"",
          "city":"",
          "description":"",
        })
      }
      else{
        toast.error('Form Submission UnSuccessfull',{
          position:toast.POSITION.BOTTOM_RIGHT
        })
      }
})
      console.log(data);
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
    <Navbar/>
    <Box className="service-main" style={{paddingTop:'12vh'}}>
      <Box className="sm-spacing">
        <center><Typography fontSize={'2rem'} color={'white'} paddingTop={'2%'}>{props.header}</Typography></center>
        <img src={props.img} style={{
          width:'100%',
          height:'100%'
        }}/>
        <Typography fontSize={'1.4rem'} color={'white'} textAlign={'justify'} paddingTop={'2%'}>{props.description}</Typography>
        <Box paddingTop={'5%'}>
          <Grid container gap={8}>
            <Grid item lg={6} md={7} sm={12}><Typography fontSize={'2rem'} color={'white'} paddingTop={'2%'} display={'inline'}>Want To Get Our Top Trending {props.header}?</Typography></Grid>
            <Grid item lg={2.5} md={7} sm={12}><a target='_blank' href='https://wa.me/+923351577745'><Button variant='contained' size='large' color='success'><Typography>Send us a query on Whats App</Typography></Button></a></Grid>
            <Grid item lg={2.5} md={7} sm={12}><Button variant='contained' size='large' onClick={()=>{setHideForm(!hideForm)}} style={{
              "backgroundColor": "transparent",
              "color": "white",
              "border": "1px solid white"
            }}  >{hideForm ? <Typography>Or Request a phone call</Typography>:<Typography>Hide Form</Typography>}</Button></Grid>
          </Grid>
          <form onSubmit={handlePostData} style={{"marginTop":"4%"}} className={`${hideForm? "hideform":""}`}>
            <Grid container spacing={5}>
              <Grid item xs={6} lg={6} md={6} sm={6}>
                <TextField required label="Enter Your Name" variant='outlined'
                  InputLabelProps={{ style: { "color": "white" } }}
                  InputProps={{ style: { "color": "white" } }}
                  style={{ "color": "white","width":"40vw", "border":"1px solid white" }} 
                  onChange={onChangeHandle} value={data.name} name="name" />
              </Grid>

              <Grid item xs={6} lg={6} md={6} sm={6}>
                <TextField required label="Enter Your email" variant='outlined'
                  InputLabelProps={{ style: { "color": "white" } }}
                  InputProps={{ style: { "color": "white" } }}
                  style={{ "color": "white","width":"40vw", "border":"1px solid white" }} 
                  onChange={onChangeHandle} value={data.email} name="email"/>
              </Grid>
              <Grid item xs={6} lg={6} md={6} sm={6}>
                <TextField required label="Enter Your Contact Number" variant='outlined' type='number'
                  InputLabelProps={{ style: { "color": "white" } }}
                  InputProps={{ style: { "color": "white" } }}
                  style={{ "color": "white","width":"40vw", "border":"1px solid white" }} 
                  onChange={onChangeHandle} value={data.phone} name="phone"/>
              </Grid>

              <Grid item xs={6} lg={6} md={6} sm={6}>
                <TextField required label="Enter Your City" variant='outlined'
                  InputLabelProps={{ style: { "color": "white" } }}
                  InputProps={{ style: { "color": "white" } }}
                  style={{ "color": "white","width":"40vw", "border":"1px solid white" }} 
                  onChange={onChangeHandle} value={data.city} name="city" />
              </Grid>
              <Grid item xs={12} lg={12} md={12} sm={12}>
                <TextField
                  required
                  label="Enter your Query"
                  variant="outlined"
                  InputLabelProps={{ style: { "color": "white" } }}
                  InputProps={{ style: { "color": "white" } }}
                  multiline // Set the input to be a multiline TextArea
                  rows={5} // Specify the initial number of rows (3 in this case)
                  style={{"width":"81vw",  "border":"1px solid white"}}
                  onChange={onChangeHandle} value={data.description} name="description"
                />
              </Grid>
            </Grid>
            <center><Button variant='contained' size='large' style={{
              "backgroundColor": "transparent",
              "color": "white",
              "border": "1px solid white",
              "marginTop":"2%",
              "marginBottom":"2%"
            }} type='submit' ><Typography>SUBMIT</Typography></Button></center>
          </form>
        </Box>
      </Box><br /><br /><br />
    </Box></>
  )
}
