import React from "react";

import './style.css'

import LogoImg from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

function Landing() {
  return (
    <div className="page-landing">
      <div className="page-landing-content">
        <div className="logo-container">
          <img src={LogoImg} alt="Logo proffy" />
          <h2>Sua platarforma de estudo online.</h2>
        </div>

        <img src={LandingImg} alt="landing" className="hero-image" />

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Estudar
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
