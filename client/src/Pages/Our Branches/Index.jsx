import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from '../../Components/NavBar/Navbar';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function OurBranches() {
    const [showSpacing, setShowSpacing] = useState(false);
    // let officeLocation1 = ['33.682448', '72.989816'];
    // let officeLocation2 = [33.634637, 72.923294];
    const defaultProps = {
        center: {
            lat: 33.682448,
            lng: 72.989816
        },
        zoom: 11
    };
    useEffect(() => {
        setShowSpacing(true)
    }, [])

    return (
        <>
            <Navbar />
            <div className='ob'>
                <br /><br /><br /><br /><div className={`ob-spacing ${showSpacing ? 'show' : ''}`}>
                    <center>
                        <p className="ob-head">Our Branches</p>
                    </center>
                    <div className="ob-branches">
                        <p className='ob-branches-title'>Head Ofiice</p>
                        <p className="ob-address"><b>Address: </b> Office No. 304, 3rd Floor Al Safa Heights-1, F-11 Markaz,</p>
                        <p className="ob-address"><b>City: </b> Islamabad</p>
                        <p className="ob-address"><b>Postal Code: </b> 04403</p>
                        <p className="ob-address"><b>Country: </b> Pakistan</p>
                        <p className="ob-address"><b>Contact Number: </b> +92 345 5678912</p>
                        {/* <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={33.682448}
                                    lng={72.989816}
                                    text="My Marker"
                                />
                            </GoogleMapReact>
                        </div> */}
                    </div>

                    <div className="ob-branches">
                        <p className='ob-branches-title'>G-15 Branch</p>
                        <p className="ob-address"><b>Address: </b> Main Road No.2, Office No.7 Khyber 4, 1st Floor G-15 Markaz</p>
                        <p className="ob-address"><b>City: </b> Islamabad</p>
                        <p className="ob-address"><b>Postal Code: </b> 04403</p>
                        <p className="ob-address"><b>Country: </b> Pakistan</p>
                        <p className="ob-address"><b>Contact Number: </b> +92 345 5678912</p>
                    </div>
                </div><br /><br /><br /><br />
            </div>
        </>
    )
}
