import React from "react";
import './home.css';
import { FaSearch } from 'react-icons/fa';
import {AiOutlineSwapRight} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { useRef,useEffect,useState } from 'react'
import images from './images'
 import NavBar from '../navigation/NavigationBar'
import Footer from "../../component/newfooter";
import { Link } from 'react-router-dom';

const Home =()=>{
    const[width,setWidth] = useState(0);
    const carousel =useRef();
  
    useEffect(()=>{
  setWidth(carousel.current - carousel.current)
    },[])

    return(

 
        <div id="homewhole1">
            <NavBar/>
        <div id="homecontainer1">
<div id="homeoverlay"></div>

<div id="homewhole2"  >
    <div id="homepar">
        <div id="homediv">
    <h1>Your next stop awaits</h1> 
    <div >
    <Link to='/book-here' id="homebutton"> <button >Book here</button></Link> 
    </div>
    </div>
        </div> 

</div>
        </div>
        <div id="fix">
        <div id="homecontainer22">
        <div id="homecontainer2">
            <div id="homecont2">
            <h2>Find schedule</h2> 
       <p>Quickly look up scheduled times for a specific bus stop, bus route or station</p>

       <form>
        <div id="homeinput">
        <div id="homeinput1">
        <label>Search route name</label>
        <input placeholder="e.g.chez lando" type="text"/>
        </div>
        <div id="homeinput2">
        <label>Filter</label>
        <select id='homeDropdown'>
            <option value="option1">Show all</option>
            <option value="option2">Stops</option>
            <option value="option3">Routes/Lines</option>
            <option value="option4">Bus Station</option>
        </select>
        </div>
<Link to='/book-here'><button><span><FaSearch/></span>Find Schedule</button></Link>
        </div>
        </form>  </div>  
        </div>
        </div>
        
<div id="homewhole3"  >
    <div id="homeone">
<p>Schedule and maps</p>
    </div>
    <div id="hometwo">
    <p> bus schedules</p>
    </div>
</div>

<div id="schedule">
    <h1>Bus Schedule</h1>
    <p id="p">Our three automated rapid transit Bus lines take you all around Kigali:</p>
    <div id="p1">
        <p id="p2">  Gasabo district  <AiOutlineSwapRight/> 34 bus routes </p>
        <p id="p2">  Kicukiro district  <AiOutlineSwapRight/> 2 bus routes</p>
        <p id="p2">  Nyarugenge district  <AiOutlineSwapRight/> 15 bus routes</p>
 
    </div>
<div id="map">
    <div id="homeline1"></div>
    <div id="rectangle">
        <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31900.292484035286!2d30.05784773616678!3d-1.9378347333206631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6a40203f041%3A0x5f8434259d8c4393!2sKacyiru%2C%20Kigali!5e0!3m2!1sfr!2srw!4v1685865664641!5m2!1sfr!2srw"
        width="80%"
        height="240"
        style={{ border: '0',borderRadius:'7px 0 0 7px'}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Map"
      id="map1"
      ></iframe>
        </div>
        <div id="rect">
            <h4>Discover all destinations</h4>
              <p id="home-fix-para">Choose from over 100 routes destination in Kigali</p>
              <Link to='/tracking'><button>Expore the map <AiOutlineRight style={{paddingTop:'2%'}}/></button></Link>   
        </div>
    </div>
    <div id="homeline2"></div>
</div>
</div>
 
<div id="paragraph">
    <div id="parg1">
        <h2>Get Cheap Bus Tickets Easily with Us</h2>
        <p>If you're looking to travel by bus , We got you covered with our extensive bus routes! With over 100 routes all over Kigali, you can easily find the perfect option . Plus, our cheap bus tickets make it easy and affordable to get whenever you want to manage your time properly, whether it's for work or play from station to staion.</p>
    </div>
    <div  id="parg2">
<h2>Bus Routes to Suit Your Schedule</h2>
<p>Boarding with us is simple and hassle-free, thanks to our frequent bus connections, reliable schedules, and modern vehicles. With over 400 buses from different stations, including those from kicukiro and nyarugenge, you can easily find the perfect option for your location. Additionally, We offer bus travel in different province, providing even more travel options to suit your needs. Our extensive network spans to 4 provinces  ,making it easy to plan and book your trip online or through our user-friendly website. Plus, stay connected on the go with free WiFi on most of our buses , and track your journey in real-time with our advanced tracking system.</p>
    </div>
    <div  id="parg3">
        <h2>Book your seat with us</h2>
        <p>Our website makes it easy to plan your journey, find the cheapest bus fares, and purchase your bus tickets securely. Whether you are planning or booking last-minute trip, We make buying bus tickets a breeze. Plus, with our convenient e-ticket system, you can board your bus without the hassle of paper tickets as your phone will serve as your ticket.</p>
    </div>
</div>
</div>

<div id="drag">
<p>Explore roads with us</p>
<h1>Our Bus Stops</h1>


<div id='container'>
            <motion.div ref={carousel} id='carousel' whileTap={{cursor: 'grabbing'}}  >
              <motion.div drag="x" dragConstraints={{right:0,left: -width}} id='inner-carousel'>
{images.map(image =>{
    return(
      <motion.div id='item' key={image}>
        
        <img src={image} /> 
      </motion.div>  
    )
})
}
              </motion.div>
            </motion.div>

        </div>

</div>
<Footer/>
        </div>
    )
}
export default Home