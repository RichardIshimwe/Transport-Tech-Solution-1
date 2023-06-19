import React from "react";
import {Routes, Route} from 'react-router-dom'
import Admindash from '../../pages/Admindashboard/admindash'
import Admindash2 from "../../pages/Admindashboard/admindash2";
import Admindash3 from "../../pages/Admindashboard/admindash3"
import Admindash4 from '../../pages/Admindashboard/admindash4'
import Admindash5 from '../../pages/Admindashboard/admindash5'
 
import Footer from '../newfooter'
import Tracking from "../../pages/Tracking/tracking";
import Booking from "../../pages/booking/Booking";
import Destination from "../../pages/Destination/destination";
import Signup from "../../pages/login-signup/sign-up";
import Login from "../../pages/login-signup/log-in";
import NavBar from "../../pages/navigation/NavigationBar";

 
// import BookingForm from "../../pages/booking/BookingForm"
 
// import CancelTicket from "../../pages/cancel-ticket/cancelTicket"

 import CancelTicket from '../../pages/cancel-ticket/cancelTicket'

 
import Contact from '../../pages/contact-us/contactUs';

import Home from '../../pages/home/home.jsx';
 
 
const Index = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/footer" element ={<Footer/>}/>
            <Route path="/admin" element={<Admindash/>}/>
            <Route path="/tracking" element={<Tracking/>}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/destination" element={<Destination/>}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/driver" element={<Admindash2/>}/>
            <Route path="/bus" element={<Admindash3/>}/>
            <Route path="/claim" element={<Admindash4/>}/>
            <Route path="/form" element={<Admindash5/>}/>
 
 {/* <Route path="/bookingform" element={<BookingForm/>}/> */}
 
 
            {/* <Route path="/book-here" element= {<BookingForm />}/> */}
             
            <Route path="/cancel-ticket" element= {<CancelTicket/>}/>
           
 
           
 

 <Route path="/contact" element={<Contact/>}/>      
 
 
            <Route path="/navbar" element={<NavBar/>}/>
  
     </Routes>
    )
}
export default Index;