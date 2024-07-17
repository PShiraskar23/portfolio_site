import React, { useState } from "react";
import "./style.css";
import BrandLogo from "../Logos/p_logo";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-scroll";

const MobileMenuDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const menuList = [
    {
      name: "Home",
      id: "Navbar",
    },
    {
      name: "About",
      id: "About",
    },
    {
      name: "Skills",
      id: "Skills",
    },
    {
      name: "Projects",
      id: "Projects",
    },
    {
      name: "Contact Me",
      id: "ContactMe",
    },
  ];
  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="logo">
      <Link
          spy={true}
          to="Navbar"
          smooth={true}
          activeClass="activeClass"
          onClick={toggleDrawer(false)}
        >
        <BrandLogo />
        </Link>
      </div>
      <List>
        {menuList.map((menu, index) => (
          <ListItem key={menu.name} disablePadding>
            <ListItemButton>
              {/* <ListItemText primary={text}> */}
              <Link
                className="menuItem"
                spy={true}
                to={menu.id}
                smooth={true}
                activeClass="activeClass"
                onClick={toggleDrawer(false)}
              >
                <li>{menu.name}</li>
              </Link>
              {/* </ListItemText> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* <div className="social_menu">
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
            onClick={() => handleNavigation("https://github.com/PShiraskar23")}
          >
            <GitHubIcon className="github icon" />
          </div>
          <div
            className="icon_container"
            onClick={() => handleNavigation("https://www.instagram.com/piyush_shiraskar/")}
          >
            <InstagramIcon className="instagram icon" />
          </div>
        </div> */}
    </Box>
  );
  return (
    <div className="mobile_menu_container">
      <div className="logo">
        <Link
          spy={true}
          to="Navbar"
          smooth={true}
          activeClass="activeClass"
        >
          <BrandLogo />
        </Link>
      </div>
      <div>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;
