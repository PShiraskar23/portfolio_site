import "./style.css";
import React from "react";
import { Link } from "react-scroll";
// import { motion } from "framer-motion";

import useWindowResize from "../hooks/useWindowSize";
import piyushImg from "../assets/picofme (7).png";
// import { fadeIn } from "../Widgets/animations/variants";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import DownloadIcon from "@mui/icons-material/Download";


const AboutMe = () => {
  const { width } = useWindowResize();
  const leftDirection = width < 427 ? "up" : "left";

  return (
    <div  className="about_container" id="About">
      <div className="left">
        <img className="profile_pic" src={piyushImg} alt="pic" />
        <div className="rectangle"></div>
      </div>

      <div
        // variants={fadeIn(leftDirection, 0.3)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
        className="right"
      >
        <p className="heading">About Me</p>
        <img className="profile_pic_right" src={piyushImg} alt="pic" />
        <p className="intro">
          Skilled web developer with more than five years of hands-on experience
          in designing, developing, and maintaining dynamic web applications and
          websites. Proficient in front-end technologies, with a proven track
          record of delivering high-quality solutions. As a detail-oriented
          professional, I prioritize clean code and effective communication to
          collaborate seamlessly within teams and exceed project expectations.
        </p>
        <div className="btn_container">
          <Link spy={true} to="ContactMe" smooth={true}>
            <button className="btn hire_btn">Hire Me</button>
          </Link>
          {/* <button className="btn resume_btn"> Download CV <DownloadIcon /></button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
