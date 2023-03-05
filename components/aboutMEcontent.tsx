import Image from "next/image";
import React from "react";
Image;

const AboutMEcontent = () => {
  return (
    <div className="page-2">
      <section className="page-2-content">
        <h1 id="first-section" className="scroll-frm-head">
          About me
        </h1>
        {/* <Image
            className="profileImage"
            src="./images/richieImg.jpg"
            alt="Richie Mugambi"
          ></Image> */}
        <h2>&quot;Hi there👋&quot;</h2>
        <p>
          {" "}
          My name is Richie. I am a passionate <b>fullstack engineer</b> who
          loves making applications and endlessly increasing my knowledge.
          <br />
          <br />I <b>build websites </b>for my own use which include{" "}
          <b>server side application🔧</b> to <b>end client applications📲</b>{" "}
          using diverse languages and libraries such as <b>reactJS,NodeJS</b>{" "}
          .... i mainly work on my own projects but also develop solutions to
          businesses.
        </p>
        {/* {(name = "aboutMe")} */}
        About me
      </section>
    </div>
  );
};

export default AboutMEcontent;
