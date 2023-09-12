import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import bussiness from '../../../Assets/business1.jpg'
import wedding from '../../../Assets/wedding.jpg'
import rental from '../../../Assets/rental.jpg'
import flight from '../../../Assets/flight.jpg'
import Card from '../../../Components/Card/Index'
import { Grid } from '@mui/material'
export default function Second() {
    const navigator = useNavigate();
    const [services, setServices] = useState([
        {
            "header": "Airport Transfers",
            "description": "Look no further than our professional Airport pick up and airport drop off services, make the most of your trip with our Airport pick and drop car services.",
            "image":flight,
            "route":"/ourservices/airport-service"
        },
        {
            "header": "Bussiness Trips",
            "description": "Renting luxury cars for business trips in Islamabad. Our service that provides a wide range of luxury vehicles to suit your preferences and needs",
            "image":bussiness,
            "route":"/ourservices/bussiness-trips"
        },
        {
            "header": "Rental Services",
            "description": "When it comes to traveling comfortably and in style, Our luxury car rentals service in Islamabad offer many advantages that set them apart from regular rental cars or public transport.",
            "image":rental,
            "route":"/ourservices/rental-service"
        },
        {
            "header": "Wedding Services",
            "description": "Our wеdding cars rеntals comе in all makеs and modеls, еnsuring that you find somеthing еxtraordinary that suits your stylе and pеrsonality",
            "image":wedding,
            "route":"/ourservices/wedding-service"
        },
    ]);
    if(!services){
        setServices("")
    }
    return (
        <>
            <p className='lp-sec-head'>Services</p>
            <Grid container spacing={2}>
                {services.map((service, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card onClick={() => { navigator(`${service.route}`)}} header={service.header} image={service.image} description={service.description} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
