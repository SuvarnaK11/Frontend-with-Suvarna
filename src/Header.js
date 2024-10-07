import React from "react";
import logo from "./assets/suvarna_logo.png";

const Header = () => {
  return (
    <>
      <div class="header">
        <div class="app-logo">
          <a href="">
            <img src={logo} />
          </a>
        </div>

        <nav class="navbar">
          <div class="container-fluid">
            <a href="#skills" class="btn-custom">
              {" "}
              Skills{" "}
            </a>
            <a href="#work-experience" class="btn-custom">
              Work Experience
            </a>
            <a href="#projects" class="btn-custom">
              Projects
            </a>
            <a href="#" class="btn-custom">
              Blogs
            </a>
            <a href="#" class="btn-custom">
              Contact Me!
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
