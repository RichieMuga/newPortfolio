import Image from "next/image";
import React from "react";
import LINKEDIN from "../public/images/linkeIn.png";
import GITHUB from "../public/images/github.png";
import INSTAGRAM from "../public/images/instagram 1.png";

const Socials = () => {
  return (
    <section className="page-5">
      <p className="black">
        Kindly click on the icons and(or) email text, to be redirected to my
        social media handles.
      </p>
      <div className="social-media">
        <ul>
          <li>
            <a href="https://github.com/RichieMuga">
              <Image className="socials2" alt="github" src={GITHUB} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/richie-mugambi-465467213/">
              <Image className="socials2" alt="linkedIn" src={LINKEDIN} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/richie_muga/">
              <Image className="socials2" alt="instagram" src={INSTAGRAM} />
            </a>
          </li>
        </ul>
      </div>
      <h2 className="black">or</h2>
      <h2 className="black">write to me @</h2>
      <a className="email white" href="#">
        richiemugambi4@gmail.com
      </a>
    </section>
  );
};

export default Socials;
