import React from "react";
import programmer from "./assets/programmer.png";
import html from "./assets/html_logo.png";
import css_logo from "./assets/css_logo.png";
import angular_logo from "./assets/angular_logo.png";
import react_logo from "./assets/icons8-react-native-48.png";
import nextjs_logo from "./assets/nextjs_logo.png";
import jslogo from "./assets/JA_logo.png";
import ts_logo from "./assets/ts_logo.png";
import bootstrap_logo from "./assets/bootstrap_logo.png";
import chakraUI_logo from "./assets/chakraUI_logo.png";
import sass_logo from "./assets/sass_logo.png";
import MUI_logo from "./assets/MUI_logo.png";

const Skills = () => {
  return (
    <div>
      <div class="skills-page" style={{ height: "100vh" }}>
        <div class="skill-div-1">
          <img src={programmer} class="skills-img" />
        </div>
        <div class="skill-div-2">
          <h1>What I do</h1>
          <p style={{ fontSize: "1.5rem" }}>
            CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>
          <div class="logo-container">
            <img src={html} title="HTML" class="logo" />
            <img src={css_logo} title="CSS" class="logo" />
            <img src={angular_logo} title="Angular" class="logo" />
            <img src={react_logo} title="Reactjs" class="logo" />
            <img src={nextjs_logo} title="Next.js" class="logo" />
          </div>

          <div class="logo-container">
            <img src={jslogo} title="JavaScript" class="logo" />
            <img src={ts_logo} title="TypeScript" class="logo" />
          </div>

          <div class="logo-container">
            <img src={bootstrap_logo} title="Bootstrap" class="logo" />
            <img src={chakraUI_logo} title="Chakra UI" class="logo" />
            <img src={sass_logo} title="Sass" class="logo" />
            <img src={MUI_logo} title="Material UI" class="logo" />
          </div>

          <div style={{ fontSize: "1.2rem", marginTop: "20px" }}>
            🚀 Develop highly interactive Front end / User Interfaces for your
            web and mobile applications!
          </div>
          <div style={{ fontSize: "1.2rem", marginTop: "20px" }}>
            🚀 Progressive Web Applications ( PWA ) in normal and SPA Stacks!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
