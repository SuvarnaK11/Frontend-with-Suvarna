import React from "react";
import logo from "./assets/suvarna_logo.png";
import { Link } from "react-scroll";

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
            <Link
              to="skills"
              smooth={true}
              duration={100}
              className="btn-custom"
            >
              {" "}
              Skills{" "}
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={100}
              className="btn-custom"
            >
              Work Experience
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={100}
              className="btn-custom"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={100}
              className="btn-custom"
            >
              Blogs
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={100}
              className="btn-custom"
            >
              Contact Me!
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
