import React, { useEffect } from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { addImagesCarGaller } from '../../States/action-creators'
import { Grid } from '@mui/material';
import Navbar from '../../Components/NavBar/Navbar';
import url from '../../url';
export default function CarGallery() {
  // USing Selector to use Gallery State
  const Gallery = useSelector(state => state.Gallery);

  // Using Dispatch Hook to use reducers to change states of car gallery
  const dispatch = useDispatch();

  //API Call to get Images Data
  const getData = async () => {
    await fetch(`${url}/api/gallery/getImages`)
      .then(res => res.json())
      .then(response => dispatch(addImagesCarGaller(response.data)));
  }

  //Calling getData when the page loads
  useEffect(() => {
    getData();// eslint-disable-next-line
  }, [])

  return (
   <>
    <Navbar />
    <div className='cg'>
      <div className="cg-spacing">
        <br /><center><p className='cg-head'>Car Gallery</p></center><br />
        <Grid container spacing={2}>
          {Gallery.map((val, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4}>

                <img className='cg-c-img' src={`${url}/${val.image}`} alt='' />
             
            </Grid>
          ))}
        </Grid>
      </div><br /><br /><br />
    </div>
    </>
  )
}
