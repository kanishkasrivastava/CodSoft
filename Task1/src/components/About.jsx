import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Kanishka Srivastava</b> and I am from Jamshedpur,
            India. I'm a <b>Java developer</b> and a third year
            university student pursuing <b>B.Tech in Computer Science and Engineering</b>. <br />
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it, you can check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to make discord servers,designs and do
            photography in my spare time.
          </p>
          <a href="Resume.pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="Java" />
        <Skills skill="C++" />
        <Skills skill="Python" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Springboot" />
        <Skills skill="SQL" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Npm" />
      </div>
    </>
  );
};

export default About;
