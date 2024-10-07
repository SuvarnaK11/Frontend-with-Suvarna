import React from "react";
import skills from "./assets/skills.jpg";
import discord from "./assets/discord2.webp";
import leetcode from "./assets/leetcode.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";

const Dashboard = () => {
  const letters = [
    "H",
    "e",
    "y",
    "\u00A0", // \u00A0 represents a non-breaking space
    "t",
    "h",
    "e",
    "r",
    "e",
    "\u00A0",
    "!",
    "\u00A0",
    "I",
    "'",
    "m",
    "\u00A0",
    "S",
    "u",
    "v",
    "a",
    "r",
    "n",
    "a",
  ];
  return (
    <div>
      <Header />
      <div class="dashboard">
        <div>
          <h1 class="burst-text">
            {letters.map((letter) => (
              <span class="letter">{letter}</span>
            ))}
            <span class="emoji">✋</span>
          </h1>
          <p class="cover-letter-lines">
            A passionate Frontend Developer 🚀 having an experience of building
            Web and Mobile applications with JavaScript / Angular / Reactjs /
            Nextjs and some cool libraries like Material UI, Ckakra UI,
            ngx-formly and many more.
          </p>
          <div class="social-media-icons">
            <a href="https://github.com/SuvarnaK11" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="github social-icon" />{" "}
            </a>
            <a href="https://www.linkedin.com/in/suvarna-kale/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="linkedin social-icon"
              />
            </a>
            <a href="https://www.instagram.com/r.a.d.h.a._11/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="insta social-icon"
              />
            </a>
            <a href="https://medium.com/@suvarna.kale" target="_blank">
              <FontAwesomeIcon icon={faMedium} className="medium social-icon" />
            </a>
            <a href="https://leetcode.com/u/Suvarna_Kale/" target="_blank">
              <img src={leetcode} class="leetcode social-icon" />
            </a>
            <a href="https://discord.com/suvarna0734" target="_blank">
              <img src={discord} class="discord" />
            </a>
          </div>
          <div class="dashboard-buttons">
            <button class="btn-custom-resume">Contact Me</button>
            <a
              href="https://drive.google.com/file/d/1Z3VLOqbDPzrxogESxbdy8zQTLyPXDoYo/view?usp=sharing"
              target="_blank"
            >
              <button class="btn-custom-resume">See My Resume</button>
            </a>
          </div>
        </div>

        <div>
          <img class="welcomeImage" src={skills} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
