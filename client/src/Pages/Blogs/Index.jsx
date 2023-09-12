import React, { useEffect } from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { addBlogs } from '../../States/action-creators';
import { Grid, Typography } from '@mui/material';
import Navbar from '../../Components/NavBar/Navbar';
import { useNavigate } from 'react-router-dom';
import url from '../../url';
export default function Blogs() {
    // using dispatch to use Blog state
    const dispatch = useDispatch();
    const Blogs = useSelector(state => state.Blogs);
    const getData = async () => {
        await fetch(`${url}/api/blog/getBlogs`).then(res => res.json()).then(response => dispatch(addBlogs(response.blogs)));
    }
    useEffect(() => {
        getData();// eslint-disable-next-line
    }, [])
    const navigator = useNavigate();
    const onClickHandle = (index)=>{
        navigator(`/blogDetails/${index}`)
    }
    return (
        <>
        <Navbar />
        <div className='blog'>
            <div className="bg-spacing">
                <br /><center><p className='bg-head'>Our Blogs</p></center><br />
                <Grid container spacing={2}>
                    {Blogs.map((val, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                            <div onClick={()=>{
                                onClickHandle(index)
                            }} className='bg-card'>
                                <img src={`${url}/${val.image}`} alt='temp' />
                                <Typography variant='body1' style={{
                                    fontSize:'18px',
                                    fontWeight:'600'
                                }}>{val.title.length > 40 ? `${val.title.substring(0,40)} see more...`:val.title}</Typography>
                                <center><Typography variant='body2' style={{
                                    marginTop:'9%',
                                    fontSize:'14px'
                                }}>Date Posted: {val.date.slice(0, 10)}</Typography></center>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div><br /><br /><br />
        </div>
        </>
    )
}
