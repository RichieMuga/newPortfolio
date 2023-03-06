import React from "react";
import Image from "next/image";
import h1Styles from "../utils/headings";
import paragraph from "../utils/paragraph";
import myWork from "../utils/mywork";
import Link from "next/link";

const MyWork = () => {
  return (
    <div className="page-4">
      <div className="4th-page-content"></div>
      <hr />
      <h1 style={h1Styles}>My work</h1>
      <section className="project-imeges-content">
        <p style={paragraph}>
          Some of the projects that I&apos;ve worked on include the following:
        </p>
        <ul className="myWork">
          {myWork.map((work) => {
            return (
              <div key={work.id} className="item1">
                <li key={work.id}>
                  <Link href={work.link}>
                    <div className="item">
                      <h4>{work.name}</h4>
                      <Image src={work.image} alt=""></Image>
                      {work.text}
                    </div>
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default MyWork;
