import React from "react";
import "./hero.css";
import profile from "../../assets/myself.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="left-side">
        <h3 className="hello orange-text">Hello, I'm</h3>
        <h1 className="name">Dhiraj Arya</h1>
        <h3 className="job">
          A <span className="green-text">web Developer</span> From{" "}
          <span className="yellow-text">India.</span>
        </h3>
        <p className="tagline">
          I'm creative developer based in India, and I'm very
          passionate and dedicated to my work.
        </p>
        <div className="action-box">
          <a href="#" className="action-btn">
            <span>About Me</span>
          </a>
          <div className="social_link">
            <a href="#" className="social_link_btn">
              FB
            </a>
            <a href="#" className="social_link_btn">
              IN
            </a>
            <a href="#" className="social_link_btn">
              LI
            </a>
            <a href="#" className="social_link_btn">
              TW
            </a>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src={profile} alt="Profile_pic" />
      </div>
      <a href="#about" className="mouse_scroll">
        <div className="wheel"></div>
      </a>
    </section>
  );
}

export default Hero;
