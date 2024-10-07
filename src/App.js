import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import Skills from "./Skills";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Dashboard />
      <Element name="skills">
        <Skills />
      </Element>
    </>
  );
}

export default App;
