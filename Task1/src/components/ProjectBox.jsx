import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TaskTracker:
      "This website is a for a users to help with their schedule.This helped me understand React better and more clearly.",
    Github: "https://github.com/kanishkasrivastava/Codsoft-Task-tracker",
    

    EmailVerification:
      "This web app  is for validating email authencitation.The project helped me with understanding the working of API.I also learned new CSS properties and tricks.",
    MovieGithub: "https://github.com/kanishkasrivastava/spb-email-verification-demo",

    ColourPaletteDesc:
      "This website helps you generate random colours that you can use as a palette.The project helped me understand Javascript more deeply using advance techniques",
    ColourPaletteGithub: "https://github.com/kanishkasrivastava/FaceDetection",

    BackpackDesc:
      "This webpageis was made for an ecommerce brand showcasing their backpacks.The project taught me how to use custom cursors and arrange text in a much better way",
    BackpackGithub: "https://github.com/kanishkasrivastava/LibraryManagementSystem_React_Springboot",
  };

  return (
    <div className="projectBox">
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
