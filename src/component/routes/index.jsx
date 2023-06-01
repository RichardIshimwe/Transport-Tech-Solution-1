import React from "react";
import {Routes, Route} from 'react-router-dom'
import Admindash from '../../pages/Admindashboard/admindash'
import Admindash2 from "../../pages/Admindashboard/admindash2";
import Admindash3 from "../../pages/Admindashboard/admindash3"
import Admindash4 from '../../pages/Admindashboard/admindash4'
import Admindash5 from '../../pages/Admindashboard/admindash5'
import Trial from '../trial.jsx'
const Index = () =>{
    return(
        <Routes>
            <Route path="/trial" element ={<Trial/>}/>
            <Route path="/admin" element={<Admindash/>}/>
            <Route path="/driver" element={<Admindash2/>}/>
            <Route path="/bus" element={<Admindash3/>}/>
            <Route path="/claim" element={<Admindash4/>}/>
            <Route path="/form" element={<Admindash5/>}/>
        </Routes>
    )
}
export default Index;