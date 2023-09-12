import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from '../../Components/NavBar/Navbar';
export default function OurServices() {
    const [showSpacing, setShowSpacing] = useState(false);
    useEffect(() => {
        setShowSpacing(true)
    }, [])
    return (
        <>
        <Navbar/>
        <div className='os'>
            <br/><br/><br/><br/><br/><div className={`os-spacing ${showSpacing ? 'show' : ''}`}>
                <br /><center><p className='os-head'>OUR SERVICES</p></center><br />
                <p className='os-head-des'>We provide airport transport services with luxury and comfortable rides, we offer pick-and-drop services, and daily rental services for our valued visitors. We provide intracity services for business trips that will enhance your trip comfortability and helps to move smoothly between different location. When it comes to traveling comfortably and in style, Our luxury car rentals service in Islamabad offers many advantages that set them apart from regular rental cars or public transport .People want to rent a luxury vehicle for a few days so they can use it for special occasions, or wedding events without having to invest a significant investment to purchase one of their own.
                </p>
                <div className='os-service-container'>
                    <br /><p className='os-title'>AirPort transfer:</p><br />
                    <li className='os-des'>When it comes to airport pickup and drop services, renting a luxury car from Mian travel and tours car rental service in Islamabad is the perfect choice.</li>
                    <li className='os-des'>With our wide selection of luxury vehicles, professional drivers, and flexible rental options, we effort to provide you with a premium travel experience. </li>
                    <li className='os-des'>Whether you're visiting Islamabad for business or entertainment, our services ensure that you can navigate the city with ease, comfort, and style. </li>
                    <li className='os-des'>Say goodbye to the stress of finding transportation at the airport and embrace the convenience and luxury of our airport pickup and drop services. </li>
                    <li className='os-des'>Book your luxury car today and enjoy a smooth journey from start to finish.</li>
                </div>
                <div className="os-service-container">
                    <br /><p className='os-title'>Rental Vehicles:</p><br />
                    <li className="os-des">When it comes to traveling in comfort and style, Mian travel and tours luxury rent a cars in Islamabad offer multiple benefits that set them apart from regular car rentals or public transportation.</li>
                    <li className="os-des">Whether you are a tourist exploring the city or a local resident looking for a special experience, renting a luxury car can enhance your journey in several ways.</li>
                    <li className="os-des">One of the primary benefits of luxury car rentals in Islamabad is the convenience and comfort they provide. </li>
                    <li className="os-des">Instead of relying on public transportation or navigating through unfamiliar routes with a regular rental car, a luxury vehicle allows you to travel in utmost comfort and style. </li>
                    <li className="os-des">With plush interiors, advanced features, and ergonomic design, luxury cars ensure a smooth and enjoyable ride.
                    </li>
                </div>
                <div className="os-service-container">
                    <br /><p className='os-title'>Business trips:</p><br />
                    <li className="os-des">When it comes to traveling for business, choosing a high-quality luxury cars rental in low budget. </li>
                    <li className="os-des">Mian travel and tours in Islamabad can offer many advantages. Its main advantage is convenience, allowing you to travel according to your  own schedule without relying on public transport or taxis. </li>
                    <li className="os-des">With the luxury car at your disposal, driving the busy streets of Islamabad is effortless, ensuring you arrive on time for meetings or events.</li>
                    <li className="os-des">Moreover, renting a luxury car also gives you the freedom to explore many tourist attractions, once professional obligations are met, indulge in the city's famous culinary and shopping experiences.</li>
                </div>
                <div className="os-service-container">
                    <br /><p className='os-title'>Wedding description:</p><br />
                    <li className="os-des">Mian travel and tours,we understand that your wedding day is one of the most important days of your life.</li>
                    <li className="os-des">That's why we offer a wide range of exotic and luxury cars available for rent. </li>
                    <li className="os-des">Whether you want to make a grand entrance or have a memorable getaway car.</li>
                    <li className="os-des">our stunning collection of vehicles will add that final touch of sparkle to your wedding.</li>
                </div>

            </div><br/><br/><br/><br/><br/>

        </div>
        </>
    )
}
