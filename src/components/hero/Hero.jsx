import React from "react";
import "./hero.css";
import profile from "../../assets/myself.jpg";
import { personaInfo, Links } from "../../constent.js";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  const { name, location, tagline } = personaInfo;
  const { github, linkedin, twitter,dev,instagram } = Links;

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="left-side">
          <h3 className="hello orange-text">Hello, I'm</h3>
          <h1 className="name">{name}</h1>
          <h3 className="job">
            A <span className="green-text">web Developer</span> From 
            <span className="yellow-text"> {location}.</span>
          </h3>
          <p className="tagline">{tagline}</p>
          <div className="action-box">
            <a href="#about" className="action-btn">
              <span>About Me</span>
            </a>
            <div className="social_link">
              
              <a
                href={github}
                className="social_link_btn"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href={instagram}
                className="social_link_btn"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href={linkedin}
                className="social_link_btn"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href={twitter}
                className="social_link_btn"
                target="_blank"
              >
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
