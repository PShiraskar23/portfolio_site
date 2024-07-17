import "./App.css";
import { ThemeProvider } from "./Context/themeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Info from "./Info";
import Navbar from "./Navbar/navbar";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import MobileMenuDrawer from "./MobileMenu";

function App() {
  return (
    <ThemeProvider>
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
