import React, { useState, useEffect, useRef } from "react";
import "./style2.css";
import { Link } from "react-scroll";
import BrandLogo from "../Logos/p_logo";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const MobileMenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  const menuList = [
    { name: "Home", id: "Navbar" },
    { name: "About", id: "About" },
    { name: "Skills", id: "Skills" },
    { name: "Projects", id: "Projects" },
    { name: "Contact Me", id: "ContactMe" },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleNavigation = (url) => {
    window.open(url, "_blank");
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="mobile_menu_container">
      <div className="logo">
        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
          <BrandLogo />
        </Link>
      </div>
      <button className="menu_button" onClick={toggleDrawer}>
        ☰
      </button>
      {open && (
        <div ref={drawerRef} className={`drawer ${open ? "open" : ""}`}>
          <div className="drawer_header">
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
              onClick={toggleDrawer}
            >
              <BrandLogo />
            </Link>
            {/* <button className="close_button" onClick={toggleDrawer}>✕</button> */}
          </div>
          <ul className="drawer_list">
            {menuList.map((menu, index) => (
              <li key={menu.name}>
                <Link
                  spy={true}
                  onClick={toggleDrawer}
                  to={menu.id}
                  smooth={true}
                  activeClass="activeClass"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="social_menu">
            <div
              className="icon_container"
              onClick={() =>
                handleNavigation(
                  "https://www.linkedin.com/in/piyush-shiraskar-657621149/"
                )
              }
            >
              <LinkedInIcon className="linkedin icon" />
            </div>
            <div
              className="icon_container"
              // onClick={() =>
              //   handleNavigation("https://github.com/PShiraskar23")
              // }
            >
              <GitHubIcon className="github icon" />
            </div>
            <div
              className="icon_container"
              onClick={() =>
                handleNavigation("https://www.instagram.com/piyush_shiraskar/")
              }
            >
              <InstagramIcon className="instagram icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenuDrawer;
