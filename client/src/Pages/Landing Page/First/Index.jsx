import React from 'react'
import './index.css';
import background from '../../../Assets/lp-back4.png'
import { useNavigate } from 'react-router-dom';
import mainVideo from '../../../Assets/Untitled design.gif'
import { Box, Button, Grid } from '@mui/material';
export default function First() {
    const navigator = useNavigate();
    return (
        <div className='lp' style={{ marginTop: '60px' }}>
            <div style={{
                position:'relative'
            }}>
                {/* <center><p className='lp-head'>MIAN TAVEL AND TOURS - RENT A CAR</p></center> */}
                <Button onClick={() => {
                    navigator("/allVehicles")
                }} sx={{
                    position:'absolute',
                    zIndex:111111,
                    top:{
                        xs:'99%',
                        sm:'99%',
                        md:'60%',
                        lg:'60%'
                    },
                    left:'12%',
                    backgroundColor:'#163137',
                    border:'1px solid #163137',
                    fontSize:'1rem',
                    padding:'5px 10px',
                    borderRadius:'10px',
                    color:'white',
                    cursor:'pointer',
                    transform:'scale(1.0)',
                    transition:'backgroundColor 0.1s ease-in-out',
                    transition:'transform 0.3s ease-in-out'
                }}>Book Now <i className="fas fa-arrow-right"></i></Button>
                    <center><img src={mainVideo} style={{
                        width:'100%',
                        height:'50%'
                    }} alt='mainVideo'/></center>
                   
            </div>
        </div>
    )
}
