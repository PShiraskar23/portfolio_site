import React from "react";
import Slider from "../Widgets/Carousal";
import "./style.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Widgets/animations/variants";

const Projects = () => {
  return (
    <div className="projects_container" id="Projects">
      <motion.p
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        Recent Projects
      </motion.p>
      <Slider />
    </div>
  );
};

export default Projects;
