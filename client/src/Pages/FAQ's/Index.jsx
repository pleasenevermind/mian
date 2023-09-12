import React, { useState } from 'react'
import './index.css'
import Navbar from '../../Components/NavBar/Navbar';
export default function Faq() {
    const [displayAnser, setDisplayAnser] = useState({
        "faq2": false,
        "faq3": false,
        "faq4": false,
        "faq5": false,
        "faq6": false,
        "faq7": false,
        "faq8": false,
        "faq9": false,
        "faq10": false,
        "faq11": false,
        "faq12": false,
        "faq13": false,
        "faq14": false,
        "faq15": false,
        "faq16": false,
        "faq17": false,
        "faq18": false,
        "faq19": false,
    })
    // const [faq1, setFaq1] = useState(false);
    const handleClick = (val) => {
        let objkey = val.target.id;
        setDisplayAnser({ ...displayAnser, [val.target.id]: !displayAnser[objkey] });
    }
    return (
        <>
            <Navbar />
            <div className='faqs'>
                <br /><center>
                    <p className="faqs-head">FAQ'S</p>
                </center><br />
                <div className="faqs-spacing">
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq2) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq2" onClick={(val) => {
                            handleClick(val)
                        }}>Why Mian Travel and Tours?</p>
                        <div className={`${(displayAnser.faq2) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">We are Islamabad's no.1 Rental cars platform. We let you pre-book the best deals on your Traveling, Tours, Flights Protocol, Train Pick and drop, and Events like (Wedding, Birthday, Family events, and honeymoons packages on your Demand You no longer have to stand in lines and can Book your Favorite cars from the comfort of your phones by using a variety of digital payment methods.</p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq3) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq3" onClick={(val) => {
                            handleClick(val)
                        }}>Where you provide these services?</p>
                        <div className={`${(displayAnser.faq3) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">We provide our services in Islamabad, Rawalpindi and near Areas. But On Your Demand We provide you this Services across all Pakistan.</p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq4) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq4" onClick={(val) => {
                            handleClick(val)
                        }}>How much do you charge per day?</p>
                        <div className={`${(displayAnser.faq4) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">It depends on your package which package you select or which type of car you rent.</p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq5) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq5" onClick={(val) => {
                            handleClick(val)
                        }}>what kind of cars do you have available?</p>
                        <div className={`${(displayAnser.faq5) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">We have all kinds of standard, luxury, and premium cars available on Rent.</p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq6) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq6" onClick={(val) => {
                            handleClick(val)
                        }}>Can I choose my own car?</p>
                        <div className={`${(displayAnser.faq6) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">Absolutely! The initial step for Car booking will allow you to view the available cars. You will be able to select from these available options and book your Car immediately.</p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq7) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq7" onClick={(val) => {
                            handleClick(val)
                        }}>What are the requirements for booking a Car?</p>
                        <div className={`${(displayAnser.faq7) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">After you have selected your desired Car, you may be required to fill in some details for verification and validation such as Name, Phone number, Email, and CNIC.
                                <br/><b>Note: (CNIC copy is Required)</b>.
                                </p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq8) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq8" onClick={(val) => {
                            handleClick(val)
                        }}>Do you provide guards for wedding services?</p>
                        <div className={`${(displayAnser.faq8) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">yes we provide guards protocol for wedding ceremony.</p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq9) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq9" onClick={(val) => {
                            handleClick(val)
                        }}>Do you have pick-up and drop-off or Protocol Services?</p>
                        <div className={`${(displayAnser.faq9) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">Yes, we provide comfort and luxurious airport pick-and-drop service on your Demand.</p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq10) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq10" onClick={(val) => {
                            handleClick(val)
                        }}> Do you provide Security guards ?</p>
                        <div className={`${(displayAnser.faq10) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">yes, we provide guards protocol according to your Demand. </p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq11) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq11" onClick={(val) => {
                            handleClick(val)
                        }}> which car is highly expensive to rent?</p>
                        <div className={`${(displayAnser.faq11) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">Our expensive car is a Roll-Royce Ghost for rent with a driver.</p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq12) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq12" onClick={(val) => {
                            handleClick(val)
                        }}> Do you provide cars without a driver?</p>
                        <div className={`${(displayAnser.faq12) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">No, we Can not provide cars without drivers. Only With Driver Allowed. </p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq13) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq13" onClick={(val) => {
                            handleClick(val)
                        }}> Is this car With Fuel?</p>
                        <div className={`${(displayAnser.faq13) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">No, We just offer cars with driver without fuel. </p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq14) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq14" onClick={(val) => {
                            handleClick(val)
                        }}> How can I Book online once I have selected my car?</p>
                        <div className={`${(displayAnser.faq14) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">You can Transfer payment by using a variety of popular online payment methods mentioned below:
                                Debit/Credit Cards (Local & International)
                                Bank Transfer<br/>
                                <b>NOTE: Only Transfer your payment OFFICAL Account of Mian Travel and Tours or We'll not be responsible of loss or damage.</b>
                            </p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq15) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq15" onClick={(val) => {
                            handleClick(val)
                        }}> What information will I be able to see during my car Booking?</p>
                        <div className={`${(displayAnser.faq15) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">Using Mian Travel and Tours to Book your Favorite car, you will be able to view:
                                The timings and schedules for the occasion or journey you're trying to book.
                                Availability of car. paying the best price for it. and pay using your preferred digital payment method.
                            </p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq16) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq16" onClick={(val) => {
                            handleClick(val)
                        }}>How to Book Online / Offline ?</p>
                        <div className={`${(displayAnser.faq16) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">Exactly, We provide all Both Services for Online and Offline Booking. For Offline You can visit our offices and Book your Favorite Car.  </p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq17) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq17" onClick={(val) => {
                            handleClick(val)
                        }}> How do I know if my Booking was successful?</p>
                        <div className={`${(displayAnser.faq17) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">Upon successful completion of your Car Booking, and Payment Transferring With a few minutes of your Car Booking you will receive confirmation Call that will contain summary of your order along with E-Booking. </p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq18) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq18" onClick={(val) => {
                            handleClick(val)
                        }}> If I have a query regarding my Online Booking, who can I contact for assistance?</p>
                        <div className={`${(displayAnser.faq18) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">Our Customer Service support is available 24/7 via phone (051-5443139) and email support (hr@miantravelandtours.com). </p>
                        </div>
                    </div>
                    <div className="faq-qs">
                        <p className={`${(displayAnser.faq19) ? "faqs-q-h" : "faqs-q-h-hide"}`} id="faq19" onClick={(val) => {
                            handleClick(val)
                        }}> Where you Locate?</p>
                        <div className={`${(displayAnser.faq19) ? "faqs-ans-view" : "faqs-ans-hide"}`}>
                            <p className="faqs-q-a">Head Office: Al Safa Height's 01, Office Number 304,F/11 Markaz Islamabad Pakistan.
                                <br />Branch Office: Office # 7 1st Floor Khyber 4, G-15 Markaz , Islamabad Pakistan
                            </p>
                        </div>
                    </div><br/><br/><br/>
                </div>
            </div>
        </>
    )
}
