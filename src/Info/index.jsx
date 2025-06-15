import React , { useEffect }from "react";
import "./style.css";
import * as amplitude from '@amplitude/analytics-browser';
import { motion } from "framer-motion";
import { Element} from 'react-scroll';
import DownloadIcon from "@mui/icons-material/Download";

import TextAnimation from "../Widgets/TextAnimate";
import { fadeIn } from "../Widgets/animations/variants";
import resume from "../assets/Piyush - Frontend Developer.pdf";

const Info = () => {

useEffect(()=>{
    amplitude.track('hero_section', {
      buttonType: 'first_page',
      location: 'hero_section',
    });
  },[])

  return (
    <Element className="info_container" id="Navbar">
      <div className="left_section">
        <motion.p
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          Hey there !
        </motion.p>

        <p>
          <TextAnimation texts={["Piyush Shiraskar", "Frontend Developer"]} />
        </p>
        <motion.p
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          Designing and developing responsive, user-friendly web applications is
          my craft. With a passion for crafting elegant, efficient code, I focus
          on optimizing performance and enhancing user satisfaction. With over
          four years of experience in web development, I create seamless digital
          experiences tailored to meet customer needs.
        </motion.p>

        {/* <button className="btn cv_btn">
          Download CV <DownloadIcon />
          
        </button> */}
        <a className="btn cv_btn" href={resume} download="">
          {" "}
          Download CV <DownloadIcon />
        </a>
      </div>
      <div className="right_section">
        <svg
          className="blob1 rotate"
          xmlns="http://www.w3.org/2000/svg"
          width="330"
          height="330"
          viewBox="-25 -25 250 250"
        >
          <path
            d="M83.5957356853986 1.354675162495937 C52.863910928293805 0.25825311453723776 -8.62756332310718 62.4741234151457 0.3292241539250398 91.89219868019197 C14.717988517781908 139.1513029195628 165.90383879770087 179.77845701382745 192.45072161108288 138.1164541056753 C215.93331385185704 101.26347090973806 127.2666297432749 2.91272553788263 83.5957356853986 1.354675162495937Z"
            stroke="none"
            fill="#67c3d5"
          />
        </svg>
        <svg
          className="blob2 anti-rotate"
          xmlns="http://www.w3.org/2000/svg"
          width="330"
          height="330"
          viewBox="-25 -25 250 250"
        >
          <path
            d="M83.5957356853986 1.354675162495937 C52.863910928293805 0.25825311453723776 -8.62756332310718 62.4741234151457 0.3292241539250398 91.89219868019197 C14.717988517781908 139.1513029195628 165.90383879770087 179.77845701382745 192.45072161108288 138.1164541056753 C215.93331385185704 101.26347090973806 127.2666297432749 2.91272553788263 83.5957356853986 1.354675162495937Z"
            stroke="none"
            fill="#3c7ad0"
          />
        </svg>
      </div>
    </Element>
  );
};

export default Info;
