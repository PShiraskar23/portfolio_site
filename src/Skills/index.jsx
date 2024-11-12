import React from "react";
import "./style.css";
import html from "../assets/html-5.svg";
import css from "../assets/css-3.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import node from "../assets/node-js.svg";
import git from "../assets/git.svg";
import mui from "../assets/material-ui.svg";
import figma from "../assets/figma.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../Widgets/animations/variants";

const Skills = () => {
  const skillsArray = [
    {
      name: "HTML 5",
      logo: html,
    },
    {
      name: "CSS 3",
      logo: css,
    },
    {
      name: "Javascript",
      logo: js,
    },
    {
      name: "React",
      logo: react,
    },
    {
      name: "Node JS",
      logo: node,
    },
    {
      name: "Materil UI",
      logo: mui,
    },
    {
      name: "Git",
      logo: git,
    },
    {
      name: "Figma",
      logo: figma,
    },
  ];

  return (
    <div className="skills_container" id="Skills">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="heading"
      >
        Skills
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="sub_heading"
      >
        <p>The skills and tools , I am really good at </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="skills"
      >
        {skillsArray.map((skill) => {
          return (
            <div key={skill.name} className="skill">
              <img src={skill.logo} alt={skill.name} />
              <label htmlFor="name">{skill.name}</label>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
