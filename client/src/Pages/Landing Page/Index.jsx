import React, { useEffect, useState } from 'react'
import './index.css'
import First from './First/Index'
import Second from './Second/Index'
import Third from './Third/Index'
import Fourth from './Fourth/Index'
import Navbar from '../../Components/NavBar/Navbar'
import mainVideo from '../../Assets/main_vid.mp4'
import { Paper, Typography } from '@mui/material'
export default function LandingPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [askVideo, setAskVideo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 500;

      if (askVideo && window.scrollY >= threshold) {
        setShowVideo(true);
      } else {
        setShowVideo(false);
      }
    };

    const handleResize = () => {
      // Adjust this width threshold as needed
      const mobileWidthThreshold = 768; // For example, consider screens below 768px width as mobile
      if (window.innerWidth < mobileWidthThreshold) {
        setShowVideo(false);
        setAskVideo(false);
      }
    };

    if (askVideo) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (askVideo) {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [askVideo]);
  return (
    <>
      <div style={{ position: 'relative' }}>
        {/* {showVideo && (
          <Paper
            elevation={3}
            style={{
              position: 'fixed',
              top: '8rem',
              right: '1rem',
              zIndex: 1000,
              padding: '0.1rem',
            }}
          >
            <Typography
              onClick={() => {
                setShowVideo(false);
                setAskVideo(false);
              }}
              style={{
                position: 'absolute',
                top: '10px',
                right: '20px',
                color: 'white',
                zIndex: '1111111',
                cursor: 'pointer',
              }}
            >
              X
            </Typography>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S2TscTqgEe4" title="Rental car in Islamabad &amp; Rawalpindi just on Mian Travel and Tours #islamabad #rentacars #rentalcars" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Paper>
        )} */}
      </div>

      <Navbar />
      <div className='lp-main'>
        <First />
        <div className='lp-spacing'>
          <Second />
          <Third /><br/><br/><br/>
          {/* <Fourth /> */}
        </div>
      </div>
    </>
  )
}
