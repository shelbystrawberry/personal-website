import React from "react";
import "./home.scss"
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";



export default function Home() {
    return (
        <div className="home" id="home">
            <div className="imgContainer">
                <img src="assets/pfp.png" alt=""></img>
            </div>
            <Typist avgTypingDelay={120}>
                <span className="intro-title">
                    {"hi, "}
                    <span className="intro-name">
                        {"shelby"}
                    </span>
                    {" here."}
                </span>
            </Typist>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            I'm a software engineer student based in Raleigh, NC. I have profound
            interest in full-stack development.
          </div>
          <a href="mailto:gazi.jarin@mail.utoronto.ca" className="intro-contact">
            <EmailRoundedIcon className="mail-icon"></EmailRoundedIcon>
            {"  " + "Say hello"}
          </a>
        </div>

    )
}
