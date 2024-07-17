import React from "react";
import Slider from "../Widgets/Carousal";
import "./style.css";

const Projects = () => {
  return (
    <div className="projects_container" id="Projects">
      <p>Recent Projects</p>
      <Slider />
    </div>
  );
};

export default Projects;
