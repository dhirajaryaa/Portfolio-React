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
              Hello, <span className="yellow-text">Dhiraj Arya!</span> It's
              great to hear about your passion for technology and software
              development. Your proficiency in HTML, CSS, JavaScript, React, and
              Node.js, along with your familiarity with tools like VS Code, Git,
              GitHub, and Postman, positions you well for your full-stack
              developer journey. Your commitment to continuous learning and
              problem-solving will undoubtedly serve you well. Best of luck with
              your aspirations, and may your startup endeavors lead to impactful
              solutions! 😊
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
