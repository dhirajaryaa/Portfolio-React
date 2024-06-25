import React from "react";
import "./about.css";
import {about} from "../../constent.js";

function About() {
  const {info,cvLink} = about;
  return (
    <section className="about" id="about">
      <div className="section_container">
        <h2 className="section_container_title">About Us</h2>
        <div className="about-box">
          <div className="profile_pic"> </div>
          <div className="content">
            <h3 className="job green-text">I'm Developer</h3>
            <p>
            {info}
            </p>
            <div className="btn">
            <a href="#contact" className="action-btn">
              Hire Me
            </a>
            <a href={cvLink} className="download_cv">
              Download CV
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
