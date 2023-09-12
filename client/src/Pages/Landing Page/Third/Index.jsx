import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'
import standard from '../../../Assets/standard.jpg'
import luxury from '../../../Assets/luxury.jpg'
import elite from '../../../Assets/elite.jpg'
import Card from '../../../Components/Card/Index'
import { Grid } from '@mui/material';
export default function Third() {
    const navigator = useNavigate();
    const services = [
        {
            header: 'Economy',
            image: standard,
            description: 'we offers  budget-friendly car. These standard-cost, fuel-efficient vehicles are perfect and price range 6000 to 20,000 into PKR.',
            link: '/standardVehicles'
        },
        {
            header: 'Luxury',
            image: luxury,
            description: 'we offer luxury cars the perfect solution, providing an elevated travel experience professionalism, and a perfect price range 7000 to 10,0000 into PKR.',
            link: '/luxuryVehicles'
        },
        {
            header: 'Elite',
            image: elite,
            description: 'we offer premium cars if you\'re embarking on a luxurious road trip, our premium cars offer to raise up your experience and perfect price range of 10,0000 to 5,00000 into PKR.',
            link: '/eliteVehicles'
        }
    ];
    const offers = [
        {
            header: 'Wedding',
            image: standard,
            description: 'Our wedding cars rentals come in all makes and models, ensuring that you find something extraordinary that suits your style and personality.',
            link: '/weddingOffer'
        },
        {
            header: 'Rental',
            image: luxury,
            description: 'When it comes to traveling in comfort and style, Mian travel and tours luxury rent a cars in Islamabad offer multiple benefits that set them apart from regular car rentals or public transportation.',
            link: '/rentalOffer'
        },
        {
            header: 'Bussiness',
            image: elite,
            description: 'When it comes to traveling for business, choosing a high-quality luxury cars rental in low budget.',
            link: '/bussinessOffer'
        }
    ];
    return (
        <>
            <p className='lp-third-head'>Categories</p>
            <Grid container spacing={2}>
                {services.map((service, index) => (
                    <Grid item key={index} xs={12} sm={6} md={5} lg={4}>
                        <Card onClick={() => navigator(service.link)} header={service.header} image={service.image} description={service.description} />
                    </Grid>
                ))}
            </Grid>
            <p className='lp-third-head'>Offers</p>
            <Grid container spacing={2}>
                {offers.map((service, index) => (
                    <Grid item key={index} xs={12} sm={6} md={5} lg={4}>
                        <Card onClick={() => navigator(service.link)} header={service.header} image={service.image} description={service.description} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
