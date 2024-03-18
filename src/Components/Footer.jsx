import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/kanishkasrivastava" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/srivastavadev1711" target="_blank">
          <FaInstagram />
        </a>

        <a href="mailTo:kanishkasrivastava629@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
