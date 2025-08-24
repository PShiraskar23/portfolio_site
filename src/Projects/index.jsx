import React from "react";
import "./style.css";
// import { motion } from "framer-motion";

import Slider from "../Widgets/Carousal";
// import { fadeIn } from "../Widgets/animations/variants";

const Projects = () => {
  return (
    <div className="projects_container" id="Projects">
      <p
        // variants={fadeIn("left", 0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
      >
        Recent Projects
      </p>
      <Slider />
    </div>
  );
};

export default Projects;
