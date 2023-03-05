import React from "react";

const NavBar = () => {
  return (
    <div className="nav-container">
      <header>
        <a href="index.html" className="logo">
          RM
        </a>
        <nav>
          <ul>
            <li>
              {" "}
              <a href="#aboutMe">About me</a>
            </li>
            <li>
              {" "}
              <a href="#contactMe">Contact me</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
