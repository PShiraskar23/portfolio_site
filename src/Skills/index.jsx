import React from "react";
import "./style.css";
// import { motion } from "framer-motion";

import js from "../assets/js.svg";
import ts from "../assets/ts.svg";
import react from "../assets/react.svg";
import next from "../assets/next.svg";
import node from "../assets/node-js.svg";
import git from "../assets/git.svg";
import tailwind from "../assets/tailwind.svg";
import apollo from "../assets/apollo.svg";
// import { fadeIn } from "../Widgets/animations/variants";

const Skills = () => {
  const skillsArray = [
    {
      name: "Javascript",
      logo: js,
    },
    {
      name: "Typescript",
      logo: ts,
    },
    {
      name: "React JS",
      logo: react,
    },
    {
      name: "Next JS",
      logo: next,
    },
    {
      name: "Node JS",
      logo: node,
    },
    {
      name: "Apollo GraphQL",
      logo: apollo,
    },
    {
      name: "Tailwind CSS",
      logo: tailwind,
    },
    {
      name: "Git",
      logo: git,
    },
  ];

  return (
    <div className="skills_container" id="Skills" >
      <div
        // variants={fadeIn("right", 0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
        className="heading"
      >
        Skills
      </div>
      <div
        // variants={fadeIn("right", 0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
        className="sub_heading"
      >
        <p>The skills and tools , I am really good at </p>
      </div>

      <div
        // variants={fadeIn("left", 0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
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
      </div>
    </div>
  );
};

export default Skills;
