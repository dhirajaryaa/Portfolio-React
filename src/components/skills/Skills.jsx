import React from "react";
import "./skills.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import github from "../../assets/github.png";
import {} from "react-icons"

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section_container">
        <h2 className="section_container_title">Skills</h2>
        <div className="skills-box">
          <div className="myskills html">
            <div className="img">
              <img src={html} alt="" />
              <div className="progress-bar">98%</div>
            </div>
            <h3 className="skills-title">HTML</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              vero? Quasi magni mollitia veritatis odio dolor laborum earum hic
              nostrum.
            </p>
          </div>
          <div className="myskills css">
            <div className="img">
              <img src={css} alt="html image" />
              <div className="progress-bar">98%</div>
            </div>
            <h3 className="skills-title">CSS</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              vero? Quasi magni mollitia veritatis odio dolor laborum earum hic
              nostrum.
            </p>
          </div>
          <div className="myskills js">
            <div className="img">
              <img src={js} alt="" />
              <div className="progress-bar">98%</div>
            </div>
            <h3 className="skills-title">JavaScript</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              vero? Quasi magni mollitia veritatis odio dolor laborum earum hic
              nostrum.
            </p>
          </div>
          <div className="myskills react">
            <div className="img">
              <img src={react} alt="" />
              <div className="progress-bar">98%</div>
            </div>
            <h3 className="skills-title">REACT</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              vero? Quasi magni mollitia veritatis odio dolor laborum earum hic
              nostrum.
            </p>
          </div>
          <div className="myskills github">
            <div className="img">
              <img src={github} alt="" />
              <div className="progress-bar">98%</div>
            </div>
            <h3 className="skills-title">Github</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              vero? Quasi magni mollitia veritatis odio dolor laborum earum hic
              nostrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
