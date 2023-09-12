import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png'
export default function Navbar() {
    const [menuHide, setMenuHide] = useState(true)
    const navigator = useNavigate();
    // const setSearchBtn = () => {
    //     setLeftSearch(false)
    // }
    const onClickHandle = () => {
        menuHide ? setMenuHide(false) : setMenuHide(true)
    };
    return (
        <>
            <div className={`${(menuHide) ? 'menu-hidden' : 'menu'}`}><br />
                <Link onClick={() => { onClickHandle() }} to='/admin/home' className='menu-items'>Home</Link>
                <Link onClick={() => { onClickHandle() }} to='/admin/home/viewServicesRequests' className='menu-items'>View service Requests</Link>
                <Link onClick={() => { onClickHandle() }} to='/admin/home/addvehicle' className='menu-items'>Add Vehicle</Link>
                {/* <Link onClick={()=>{onClickHandle()}} to='/' className='menu-items'>Discount Offers</Link> */}
                <Link onClick={() => { onClickHandle() }} to='/admin/home/addBlog' className='menu-items'>Add Blog</Link>
                <Link onClick={() => { onClickHandle() }} to='/admin/home/adduser' className='menu-items'>Add User</Link>
                <Link onClick={() => { onClickHandle() }} to='/admin/home/ViewAllVehicles' className='menu-items'>Delete Vehicle</Link>
                {/* <Link onClick={()=>{onClickHandle()}} to='/' className='menu-items'>Terms</Link> */}
            </div>
            <div className='nav'>
                <div className='nav-spacing'>
                    <div className='nav-items'>
                        {/* <div className='nav-search'>
                            <i className={`fas fa-search ${(leftSearch) ? 'search-btn' : 'search-btn-none'}`}></i>
                            <input onFocus={() => { setSearchBtn() }} placeholder='Search a vehicle' className='nav-search-input' type='search' />
                            <i className={`fas fa-search ${(leftSearch) ? 'search-btn-none' : 'search-btn-after'}`}></i>
                        </div> */}
                        <img alt='logo' onClick={()=>{
                            navigator("/admin");
                        }} src={logo} className='nav-search'/>
                        <center><p className='nav-header'>Mian Travels And Tours</p></center>

                        <div onClick={() => { onClickHandle() }} className={`${(menuHide) ? 'nav-menu' : 'nav-menu-forward'}`}>
                            <i className="fas fa-bars menu-bars"></i>
                            <p className='nav-menu-btn'>Menu</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
