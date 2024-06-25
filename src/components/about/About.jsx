import React from "react";
import "./about.css";
import profile from "../../assets/myself.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="section_container">
        <h2 className="section_container_title">About Us</h2>
        <div className="about-box">
          <div className="profile_pic"> </div>
          <div className="content">
            <h3 className="job green-text">I'm Developer</h3>
            <p>
              Hello, <span className="yellow-text">Dhiraj Arya!</span> I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites. Working for myself to improve my skills. Love to build Full-Stack clones.
            </p>
            <div className="btn">
            <a href="#" className="action-btn">
              Hire Me
            </a>
            <a href="#" className="download_cv">
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
