import React from "react";
import "./hero.css";
import profile from "../../assets/myself.jpg";
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="left-side">
          <h3 className="hello orange-text">Hello, I'm</h3>
          <h1 className="name">Dhiraj Arya</h1>
          <h3 className="job">
            A <span className="green-text">web Developer</span> From{" "}
            <span className="yellow-text">India.</span>
          </h3>
          <p className="tagline">
            I'm creative developer based in India, and I'm very passionate and
            dedicated to my work.
          </p>
          <div className="action-box">
            <a href="#" className="action-btn">
              <span>About Me</span>
            </a>
            <div className="social_link">
              <a href="https://github.com/dhirajaryaa" className="social_link_btn" target="_blank">
                < FaGithub />
              </a>
              <a href="https://instagram.com/dhirajaryaa0" className="social_link_btn" target="_blank">
                < FaInstagram/>
              </a>
              <a href="https://linkedin.com/in/dhirajaryaa0" className="social_link_btn" target="_blank">
                <FaLinkedin/>
              </a>
              <a href="https://twitter.com/dhirajaryaa" className="social_link_btn" target="_blank">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img src={profile} alt="Profile_pic" />
        </div>
      
      </div>
      <a href="#about" className="mouse_scroll">
          <div className="wheel"></div>
        </a>
    </section>
  );
}

export default Hero;
