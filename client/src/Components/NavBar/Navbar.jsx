import React, { useState } from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png'
export default function Navbar() {
    const [menuHide, setMenuHide] = useState(true)
    const navigator = useNavigate();
    const onClickHandle = () => {
        menuHide ? setMenuHide(false) : setMenuHide(true)
    };
    return (
        <div>
            <div className={`${(menuHide) ? 'menu-hidden' : 'menu'}`}><br />
                <Link onClick={() => { onClickHandle() }} to='/' className='menu-items'>Home</Link>
                <Link onClick={() => { onClickHandle() }} to='/allVehicles' className='menu-items'>All Vehicles</Link>
                <Link onClick={() => { onClickHandle() }} to='/vehicleGallery' className='menu-items'>Car Gallery</Link>
                <Link onClick={() => { onClickHandle() }} to='/blogs' className='menu-items'>Blogs</Link>
                {/* <Link onClick={()=>{onClickHandle()}} to='/' className='menu-items'>Discount Offers</Link> */}
                <Link onClick={() => { onClickHandle() }} to='/ourservices' className='menu-items'>Our Services</Link>
                <Link onClick={() => { onClickHandle() }} to='/ourbranches' className='menu-items'>Contact us</Link>
                <Link onClick={() => { onClickHandle() }} to='/faqs' className='menu-items'>FAQ's</Link>
                {/* <Link onClick={()=>{onClickHandle()}} to='/' className='menu-items'>Terms</Link> */}
            </div>
            <div className='nav'>
                <div className='nav-spacing'>
                    <div className='nav-items'>
                        <img alt='logo' onClick={()=>{
                            navigator("/");
                        }} src={logo} className='nav-search'/>
                        <center><p className='nav-header'>MIAN TAVEL AND TOURS</p><p className='nav-header'>RENT A CAR</p></center>

                        <div onClick={() => { onClickHandle() }} className='nav-menu'>
                            <i className="fas fa-bars menu-bars"></i>
                            <p className='nav-menu-btn'>Menu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
