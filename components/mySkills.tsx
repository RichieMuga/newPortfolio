import React from "react";
import Image from "next/image";
import skills from "../utils/skills";
import CSS from "csstype";
import h1Styles from "../utils/headings";

const MySkills = () => {
  return (
    <div className="page-3">
      <hr className="line"></hr>
      <h1 style={h1Styles}>My skills</h1>
      <section className="page-3-content">
        <p>Some of the skills i’ve learnt throughout the years include:</p>
        <ul className="logos">
          {skills.map((skill) => {
            return (
              <li key={skill.id}>
                <Image
                  src={skill.image}
                  alt={skill.name}
                  className="logo-content"
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default MySkills;
