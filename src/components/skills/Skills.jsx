import React from "react";
import "./skills.css";
import { skills } from "../../constent.js";

const Skills = () => {
  console.log(skills);
  return (
    <section className="skills" id="skills">
      <div className="section_container">
        <h2 className="section_container_title">Skills</h2>
        <div className="skills-box">
          {skills.map((item, index) => {
            return (
              <div className="myskills" key={index}>
                <h3 className="card_heading">{item.title}</h3>
                <div className="child-box">
                {item.skill.map((skill, index) => {
                  return (
                    <div className="child" key={index}>
                      <img src={skill.img} alt="" />
                      <p>{skill.name}</p>
                      
                    </div>
                  );
                })}
                </div>
              </div>
            );
          })}

          {/* <div className="myskills">
            d
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
