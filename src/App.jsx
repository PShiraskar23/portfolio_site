import "./App.css";
import React, { useEffect} from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "./Context/themeContext";
import MobileMenuDrawer from "./MobileMenu/drawer";
// import MobileMenuDrawer from "./MobileMenu";
import Navbar from "./Navbar/navbar";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Info from "./Info";


function App() {

  useEffect(()=>{
    amplitude.init('25cb39eb8989fe2a816be75eb2c161ba', {
      defaultTracking: true,
      sessions:true
    });
  },[])

  return (
    <ThemeProvider >
      <MobileMenuDrawer/>
      <Navbar />
      <Info />
      <AboutMe/>
      <Skills />
      <Projects />
      <ContactMe />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
