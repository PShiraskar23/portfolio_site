import ToggleBtn from "../Widgets/ToggleButton/toggleBtn";
import "./style.css";
import logo from "../assets/P logo 1.svg";
import { Link } from "react-scroll";
import BrandLogo from "../Logos/p_logo";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_left">
        {/* <img src={logo} alt="logo" /> */}
        <Link
          spy={true}
          to="Navbar"
          smooth={true}
          activeClass="activeClass"
        >
        <BrandLogo />
        </Link>
        <div>{/* <ToggleBtn /> */}</div>
      </div>
      <div className="nav_center">
        <ul>
          <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
            <li>Home</li>
          </Link>
          <Link spy={true} to="About" smooth={true}>
            <li>About</li>
          </Link>
          <Link spy={true} to="Skills" smooth={true}>
            <li>Skills</li>
          </Link>
          <Link spy={true} to="Projects" smooth={true}>
            <li>Projects</li>
          </Link>
        </ul>
      </div>
      <div className="nav_right">
        <Link spy={true} to="ContactMe" smooth={true}>
          {/* <a href={img} download="">
            {" "}
          </a> */}
          <button className="contact_btn btn">Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
