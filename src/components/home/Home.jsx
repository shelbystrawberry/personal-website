import React from "react";
import "./home.scss"
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";



export default function Home() {
    return (
        <div className="home" id="home">
            <Typist avgTypingDelay={120}>
                <span className="intro-title">
                    {"hi, "}
                    <span className="intro-name">
                        {"shelby"}
                    </span>
                    {" here."}
                </span>
            </Typist>
            <div className="intro-subtitle">I create stuff.</div>
            <div className="intro-desc">
                I'm a software engineering student based in Raleigh, NC. I have a profound
                interest in full-stack development.
            </div>
            <div className="intro-contact-desc">
            I'm interested in full-stack development opportunities.
                If you have any requests or questions, don't hesitate to contact me.
            </div>
            <a href="mailto:shelbsgt500@gmail.com" className="intro-contact">
                <EmailRoundedIcon className="mail-icon"></EmailRoundedIcon>
                {"  Say hello"}
            </a>
        </div>

    )
}
