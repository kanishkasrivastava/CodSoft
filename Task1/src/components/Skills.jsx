import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaJava,
  FaPython,
  FaLeaf,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    "C++": <CgCPlusPlus />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Python:<FaPython/>,
    Java:<FaJava/>,
    SQL:<FaDatabase/>,
    Springboot:<FaLeaf/>
    
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
