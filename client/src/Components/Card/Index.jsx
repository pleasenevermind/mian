import React from 'react'
import './index.css'
import { Box, Typography } from '@mui/material';
export default function Card(props) {
    // const handleClick = () => {
    //     props.onClick();
    //   };
    return (
        <Box onClick={()=>{
            props.onClick();
        }} className='card'>
            <img className='card-img' src={props.image} alt='img' />
            <Box className='card-item'>
                <center><p className='card-itm-header'>{props.header}</p></center>
                <center><p className='card-itm-des'>{props.description}</p></center>
            </Box>
        </Box>
    )
}
