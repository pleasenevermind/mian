import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import allVehiclesContext from './All Vehicle State/allVehiclesContext';
import { useSelector } from 'react-redux';
import { Box, Button, Grid } from '@mui/material';
import Navbar from '../../Components/NavBar/Navbar';
import url from '../../url';
import { Link, useNavigate } from 'react-router-dom';

export default function AllVehicles(props) {
  const allVehicles = useSelector(state => state.AllVehicles);
  const VehicleContext = useContext(allVehiclesContext);
  const [headerText, setHeaderText] = useState("All Vehicles");
  const { getVehicleData } = VehicleContext;
  const navigator = useNavigate()
  useEffect(() => {
    // eslint-disable-next-line
    getVehicleData(); // eslint-disable-next-line
    if (props.category === "all") {
      setHeaderText("ALL VEHICLES")
    }
    else if (props.category === "standard") {
      setHeaderText("STANDARD VEHICLES")
    }
    else if (props.category === "luxury") {
      setHeaderText("LUXURY VEHICLES")
    }
    else if (props.category === "elite") {
      setHeaderText("ELITE VEHICLES")
    }
    else {
      setHeaderText("")
    }
  }, [props.category, getVehicleData]);
  return (
    <>
      <Navbar />
      <div className="av">
        <div className="av-spacing">
          <center><p className='av-head'>{headerText}</p></center>
          <Grid container spacing={2}>
            {allVehicles.length > 0 && allVehicles.map((val, index) => {
              if (props.category === "all") {
                if (index <= allVehicles.length) {

                  return <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                    <div className='av-card'>
                      <img src={`${url}/${val.image}`} height={'200px'} alt='temp' />
                      <center><p style={{
                        fontSize:'24px',
                        fontWeight:'800'
                      }}>{val.name}</p></center>
                      <center><p>PKR: {val.rentInCity}/- per Day</p></center>
                      <center><Button style={{
                        backgroundColor: '#163137',
                        marginTop:'5%'
                      }} variant='contained' onClick={() => { navigator(`/vehicleDetails?id=${val._id}`) }}>More Details</Button></center>
                    </div>
                  </Grid>
                }
              }
              else if (props.category === "standard") {
                if (val.rentInCity <= 20000 && val.rentInCity >= 1) {
                  return <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                    <div className='av-card'>
                      <Box style={{ height: '50%' }}>
                        <img src={`${url}/${val.image}`}  alt='temp' />
                      </Box>
                      <center><p style={{
                        fontSize:'24px',
                        fontWeight:'800'
                      }}>{val.name}</p></center>
                      <center><p>PKR: {val.rentInCity}/- per Day</p></center>
                      <center><Button style={{
                        backgroundColor: '#163137',
                        marginTop:'5%'
                      }} variant='contained' onClick={() => { navigator(`/vehicleDetails?id=${val._id}`) }}>More Details</Button></center>                   </div>
                  </Grid>
                }
              }
              else if (props.category === "luxury") {
                if (val.rentInCity >= 20000 && val.rentInCity <= 120000) {
                  return <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                    <div className='av-card'>
                      <Box style={{ height: '50%' }}>
                        <img src={`${url}/${val.image}`}  alt='temp' />
                      </Box>
                      <center><p style={{
                        fontSize:'24px',
                        fontWeight:'800'
                      }}>{val.name}</p></center>
                      <center><p>PKR: {val.rentInCity}/- per Day</p></center>
                      <center><Button style={{
                        backgroundColor: '#163137',
                        marginTop:'5%'
                      }} variant='contained' onClick={() => { navigator(`/vehicleDetails?id=${val._id}`) }}>More Details</Button></center>
                    </div>
                  </Grid>
                }
              }
              else if (props.category === "elite") {
                if (val.rentInCity >= 120000) {
                  { console.log(val) }
                  return <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                    <div className='av-card'>
                      <Box style={{ height: '50%' }}>
                        <img src={`${url}/${val.image}`}  alt='temp' />
                      </Box>
                      <center><p style={{
                        fontSize:'24px',
                        fontWeight:'800'
                      }}>{val.name}</p></center>
                      <center><p>PKR: {val.rentInCity}/- per Day</p></center>
                      <center><Button style={{
                        backgroundColor: '#163137',
                        marginTop:'5%'
                      }} variant='contained' onClick={() => { navigator(`/vehicleDetails?id=${val._id}`) }}>More Details</Button></center>                    </div>
                  </Grid>
                }
              }
              else {
                return <div>
                  No Vehicles in this category found
                </div>
              }
            })}
          </Grid>
        </div><br /><br /><br /><br />
      </div>
    </>
  )
}
