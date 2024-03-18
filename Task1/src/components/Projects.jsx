import React from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox  projectName="Task" />
        <ProjectBox  projectName="email verification" />
        <ProjectBox  projectName="Library Management" />
        <ProjectBox  projectName="Face Detection" />
      </div>
    </div>
  );
};

export default Projects;
