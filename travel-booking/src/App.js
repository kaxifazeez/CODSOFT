import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FlightBookingComponent from "./components/FlightBookingComponent";
import HotelBookingComponent from "./components/HotelBookingComponent";
import CarHireBookingComponent from "./components/CarHireBookingComponent";
import NavbarComponent from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent.js";
import LoginComponent from "./components/LoginComponent";
import RegistrationComponent from "./components/RegistrationComponent";
import FlightSearchComponent from "./components/SearchComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";

const App = () => {
  
  return (
    
    <div className="bg1">
      
    <Router>
      <NavbarComponent title="SkyFly" about="About" />

      <FlightSearchComponent/>
      <Routes>
        {" "}
        <Route path="/" exact element={<FlightBookingComponent />} />
        <Route path="hotels" element={<HotelBookingComponent />} />
        <Route path="carhire" element={<CarHireBookingComponent />} />
        <Route path="login" element={<LoginComponent />} />
        <Route path="registration" element={<RegistrationComponent />} />
        <Route path="about" element={<AboutComponent />} />
        <Route path="contact" element={<ContactComponent />} />
        
      </Routes>
      <CarouselComponent/>
    </Router>
    </div>
  );
};

export default App;
