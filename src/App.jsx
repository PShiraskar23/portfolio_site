import "./App.css";
import React, { useCallback, useRef ,useEffect} from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { scroller } from 'react-scroll';
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

const sections = ['info_container', 'about_container', 'skills_container','projects_container','contact_container'];

function App() {
  const currentSection = useRef(0);
  const isScrolling = useRef(false);

  const scrollToSection = useCallback((index) => {
    isScrolling.current = true;
    scroller.scrollTo(sections[index], {
      duration: 400,
      delay: 0,
      smooth: 'easeInOutQuart',
    });

    // Unlock scrolling after animation
    setTimeout(() => {
      isScrolling.current = false;
    }, 450);
  }, []);


  const handleWheel = (event) => {
    if (isScrolling.current) return; 

    if (event.deltaY > 0) {
      // Scroll down
      if (currentSection.current < sections.length - 1) {
        currentSection.current += 1;
        scrollToSection(currentSection.current);
      }
    } else {
      // Scroll up
      if (currentSection.current > 0) {
        currentSection.current -= 1;
        scrollToSection(currentSection.current);
      }
    }
  };

  useEffect(()=>{
    amplitude.init('25cb39eb8989fe2a816be75eb2c161ba', {
      defaultTracking: true,
      sessions:true
    });
  },[])

  return (
    <ThemeProvider >
      <div onWheel={handleWheel}>
      <MobileMenuDrawer/>
      <Navbar />
      <Info />
      <AboutMe/>
      <Skills />
      <Projects />
      <ContactMe />
      <ToastContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
