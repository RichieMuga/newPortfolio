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
        {/* <ul class="logos">
            <li class="logo-content"></li>
            <li class="logo-content"></li>
            <li class="logo-content"><img src="./images/final folder for program languages/javascritp.png" alt="javascript"></li>
            <li class="logo-content"><img src="./images/final folder for program languages/react.png" alt="react"></li>
            <li class="logo-content"><img src="./images/final folder for program languages/next.png" alt="next"></li>
            <li class="logo-content"><img src="./images/final folder for program languages/python.png" alt="python"></li>
            <li class="logo-content"><img src="./images/final folder for program languages/mysql.png" alt="mysql"></li>
            <li class="logo-content"><img src="./images/final folder for program languages/redux.png" alt="redux"></li>
            <li class="logo-content"><img src="./images/final folder for program languages/mongo.png" alt="mongo"></li>
            <li class="logo-content"><img src="./images/final folder for program languages/node.png" alt="node"></li>
        </ul> */}
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
