import React from 'react'
import img2 from '../../../Assets/paint.png'
import img3 from '../../../Assets/gds.png'
import img4 from '../../../Assets/mian travels.png'
import './index.css'
import { Grid } from '@mui/material'
export default function Fourth() {
    return (
        <>
            <p className='lp-forth-head'>Our Companies</p>
            <Grid container>
                <Grid item xs={5} sm={5} md={5} lg={5}>
                    <img alt='logo' src={img2} />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <img alt='logo' src={img3} />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <img alt='logo' src={img4} />
                </Grid>


            </Grid>
        </>
    )
}
