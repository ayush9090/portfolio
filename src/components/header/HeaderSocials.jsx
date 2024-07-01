import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/ayush-variyava" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ayush9090" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
