import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import url from '../../url';
import Navbar from '../../Components/NavBar/Navbar';
import { toast } from 'react-toastify';

export default function Default(props) {
    const [data, setData] = useState([]);
    const { type } = props
    const getData = async()=>{
        await fetch(`${url}/offers/get`).then(res => res.json()).then(response => {
            if (response.status) { 
                response.result.map((item) => {
                    if (item.type === type) {
                        let status = false
                        
                        setData(prevState => {
                            let newState = [...prevState]
                            if (newState.length > 0) {
                                newState.map((item1) => {
                                    if (item1._id === item._id) {
                                        console.log(item._id, ' ', item1._id)
                                        status = true

                                    }
                                })
                            }
                            if (!status) {
                                newState.push(item)
                            }
                            return newState
                        })
                    }
                })
            }
            else{
                toast.error(response.error,{
                    position:toast.POSITION.TOP_RIGHT
                })
            }
        })
    }
    useEffect( () => {
        getData();
    }, [])

    return (
        <div style={{backgroundColor:'#a0c9c3'}}>
        <Navbar/>
        <Container style={{paddingTop:'12vh', minHeight:'90vh'}}>
            <center><Typography variant='h3' style={{color:'white', textTransform:'capitalize'}}>{type} Offers</Typography></center>
            <Box>
                {data.length > 0 && data.map((item => <Box style={{textAlign:'center'}}>
                    <img src={`${url}/${item.image}`} style={{
                        width:'100%'
                    }} />
                </Box>))}
            </Box>
        </Container><br /><br /><br />
        </div>
    )
}
