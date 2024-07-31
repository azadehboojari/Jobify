import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="'info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            To be, or not to be: that is the question: whether 'tis nobler in
            the mind to suffer the slings and arrows of outrageous fortune, or
            to take arms against a sea of troubles, and by opposing end them? To
            die: to sleep; no more; and, by a sleep to say we end the heart-ache
            and the thousand natural shocks that flesh is heir to, 'tis a
            consummation devoutly to be wish'd.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            {" "}
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="jobify" className="'img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
