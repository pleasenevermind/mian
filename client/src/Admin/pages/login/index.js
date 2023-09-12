import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import url from '../../../url';
export default function Default() {
  const navigator = useNavigate();
  const [loginData, setLoginData] = useState({
    "email": "",
    "password": ""
  })
  useEffect(() => {
    if(localStorage.getItem('token')){
      navigator('/admin/home')
    }

  }, [])
  if(localStorage.getItem('token')){
    return <div></div>
  }
  const handleInput = (val) => {
    setLoginData({ ...loginData, [val.target.name]: val.target.value })
  }
  const handleSubmit = async (val)=>{
    val.preventDefault();
    await fetch(`${url}/api/admin/user/sign-in-user`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        "email":loginData.email,
        "password":loginData.password
      })
    }).then(res=>res.json()).then(response => {
      if(response.status){
        localStorage.setItem("token", response.jwt_token)
        localStorage.setItem("id", response.data._id)
        navigator('/admin/home')

      }
      else{
        alert(response.message)
      }
    })
  }
  return (
    <>

    <Container>
      <Box style={{
        "width": "1100px", "backgroundColor": "rgb(211, 211, 211)", "border": "1px solid black", "marginTop": "200px", "marginBottom": "200px", "textAlign": "center",
        "justifyContent": "center"
      }}>
        <Typography fontSize={'28px'} marginTop={"40px"} fontWeight={'800'}>ADMIN PANEL LOGIN</Typography>
        <form onSubmit={handleSubmit} style={{ "padding": "15% 15%" }}>
          <TextField
            value={loginData.email}
            onChange={handleInput}
            name='email'
            required
            style={{ "margin": "2% 2%", "width": "60%", "backgroundColor": "white" }}
            label="Email" /><br />
          <TextField required
            value={loginData.password}
            onChange={handleInput}
            name='password'
            style={{ "margin": "2% 2%", "width": "60%", "backgroundColor": "white" }}
            label="Password" type='password' /><br />
          <Button variant='contained'
            style={{ "margin": "2% 2%", "width": "60%" }}
            type='submit'>Login</Button>
        </form>
      </Box>
    </Container>
    </>
  )
}
