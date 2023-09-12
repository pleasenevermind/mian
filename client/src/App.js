import './App.css';
import Footer from './Components/Footer/Index';
import NavbarState from './Components/NavBar/Navbar State/NavbarState';
import Navbar from './Components/NavBar/Navbar.jsx';
import AllvehiclesState from './Pages/All Vehicles/All Vehicle State/allvehiclesState';
import AllVehicles from './Pages/All Vehicles/Index';
import CarGallery from './Pages/Car Gallery/Index';
import LandingPage from './Pages/Landing Page/Index';
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './States/store';
import Blogs from './Pages/Blogs/Index';
import Faq from './Pages/FAQ\'s/Index';
import OurServices from './Pages/Our Services/Index';
import OurBranches from './Pages/Our Branches/Index';
import Services from './Pages/Services'
import AdminPanel from './Admin/pages/login'
import { useEffect, useState } from 'react';
import BlogDetails from './Pages/Blog Details'
import AdminHome from './Admin/pages/Home'
import ViewAllVehicles from './Admin/pages/view all vehicles'
import ViewAllImages from './Admin/pages/view all images'
import ViewAllBlogs from './Admin/pages/view all blogs'
import AddUser from './Admin/pages/add user'
import ViewServicesRequests from './Admin/pages/view services request'
import AddVehicles from './Admin/pages/add new vehicle'
import AddBlog from './Admin/pages/add blog'
import AddOffer from './Admin/pages/addOffer'
import AddImage from './Admin/pages/add image'
import ChangePassword from './Admin/pages/change Password'
import VehicleDetails from './Pages/vehicleDetails/vehicleDetail'
import ViewOffer from'./Admin/pages/removeOffer'
import Offers from './Pages/viewOffers'
import AirportService from './Assets/airportService.png'
import RentACarServiceService from './Assets/rentACarService.png'
import WeddingService from './Assets/weddingService.png'
import BussinessService from './Assets/bussinessService.png'
function App() {
  const [visits, setVisits] = useState(0)
  useEffect(() => {
    setVisits(visits+1)
  }, [])
  
  return (
    <div className='main'>
      <Router>
        <Provider store={store}>
        <AllvehiclesState>
          <NavbarState>
              <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='*' element={<LandingPage />} />
                <Route exact path='/standardVehicles' element={<AllVehicles category= "standard" />} />
                <Route exact path='/allVehicles' element={<AllVehicles category= "all" />} />
                <Route exact path='/standardVehicles' element={<AllVehicles category= "standard" />} />
                <Route exact path='/luxuryVehicles' element={<AllVehicles category= "luxury" />} />
                <Route exact path='/eliteVehicles' element={<AllVehicles category= "elite" />} />
                <Route exact path='/vehicleGallery' element={<CarGallery />} />
                <Route exact path='/blogs' element={<Blogs />} />
                <Route exact path='/faqs' element={<Faq />} />
                <Route exact path='/vehicleDetails' element={<VehicleDetails />} />
                <Route exact path='/ourservices' element={<OurServices />} />
                <Route exact path='/weddingOffer' element={<Offers type='wedding'/>} />
                <Route exact path='/rentalOffer' element={<Offers type='rental'/>} />
                <Route exact path='/bussinessOffer' element={<Offers type='bussiness'/>} />
                <Route exact path='/ourbranches' element={<OurBranches />} />
                <Route exact path='/blogDetails/:id' element={<BlogDetails />} />
                <Route exact path='/ourservices/airport-service' element={<Services img={AirportService} header="Airport Service" description="When it comes to airport pickup and drop services, renting a luxury car from mian travel and tours car rental service in Islamabad is the perfect choice. With our wide selection of luxury vehicles, professional Drivers, and flexible rental options, we strive to provide you with a premium travel experience. Whether you're visiting Islamabad for business or entertainment, our services ensure that you can navigate the city with ease, comfort, and style. Say goodbye to the stress of finding transportation at the airport and embrace the convenience and luxury of our airport pickup and drop services. Book your luxury car today and enjoy a seamless journey from start to finish."/>} />
                <Route exact path='/ourservices/bussiness-trips' element={<Services img={BussinessService} header="Bussiness Trips" description="When it comes to traveling for business, choosing a high-quality luxury cars rental in low budget. Mian travel and tours in Islamabad can offer many advantages. Its main advantage is convenience, allowing you to travel according to your  own schedule without relying on public transport or taxis. With the luxury car at your disposal, driving the busy streets of Islamabad is effortless, ensuring you arrive on time for meetings or events. Moreover, renting a luxury car also gives you the freedom to explore many tourist attractions, once professional obligations are met, indulge in the city’s famous culinary and shopping experiences."/>} />
                <Route exact path='/ourservices/rental-service' element={<Services img={RentACarServiceService} header="Rental Service" description="When it comes to traveling in comfort and style, mian travel and tours luxury rent a cars in Islamabad offer multiple benefits that set them apart from regular car rentals or public transportation. Whether you are a tourist exploring the city or a local resident looking for a special experience, renting a luxury car can enhance your journey in several ways. One of the primary benefits of luxury car rentals in Islamabad is the convenience and comfort they provide. Instead of relying on public transportation or navigating through unfamiliar routes with a regular rental car, a luxury vehicle allows you to travel in utmost comfort and style. With plush interiors, advanced features, and ergonomic design, luxury cars ensure a smooth and enjoyable ride."/>} />
                <Route exact path='/ourservices/wedding-service' element={<Services img={WeddingService} header="Wedding service" description="Mian travеl and tours,wе undеrstand that your wеdding day is onе of thе most important days of your lifе. That's why wе offеr a widе rangе of еxotic and luxury cars availablе for rеnt. Whеthеr you want to makе a grand еntrancе or havе a mеmorablе gеtaway car, our stunning collеction of vеhiclеs will add that final touch of sparklе to your wеdding."/>} />
                <Route exact path='/admin' element={<AdminPanel />} /> 
                <Route exact path='/admin/home' element={<AdminHome />} /> 
                <Route exact path='/admin/home/viewallvehicles' element={<ViewAllVehicles />} />
                <Route exact path='/admin/home/viewallimages' element={<ViewAllImages />} />  
                <Route exact path='/admin/home/viewallblogs' element={<ViewAllBlogs />} />  
                <Route exact path='/admin/home/addUser' element={<AddUser />} />  
                <Route exact path='/admin/home/viewServicesRequests' element={<ViewServicesRequests />} />
                <Route exact path='/admin/home/addvehicle' element={<AddVehicles />} />  
                <Route exact path='/admin/home/addBlog' element={<AddBlog />} />  
                <Route exact path='/admin/home/addImage' element={<AddImage />} />  
                <Route exact path='/admin/home/offer' element={<AddOffer />} />
                <Route exact path='/admin/home/viewalloffers' element={<ViewOffer />} />  
                <Route exact path='/admin/home/changepassword' element={<ChangePassword />} />  
              </Routes>
              <Footer />
          </NavbarState>
        </AllvehiclesState>
        </Provider>
      </Router>

    </div>
  );
}

export default App;
