import "../style/landingPage.css";
import "../style/nav.css";
import photo1 from '../../public/icons/IMG_8909.jpg';

import React, { Component, useState } from "react";

import Nav from "./Nav";

const LandingPage = () => {
    return(
        <div>
            <Nav />
            <div className="whoami-container">
                <div className="whoami">
                    <h2>whoami<span>_</span></h2>
                    <p>I am a software engineer fixated on <b>web development</b>. I graduated from Mississippi State University with a degree in <b>Software Engineering</b>. I enjoy designing systems at any level of a technical stack. My main language is javascript, but I am a <b>polyglot engineer</b>. Rapidly switching between languages is something I find to be gratifying. The goal of this website is to display projects outside of my professional career. I do not want this to be yet another portfolio website. I am hoping to make this website as <b>fun</b> as possible.</p>
                    <br></br>
                    <p>Outside of advancing my professional career, I am attempting to enjoy all of the things that life has to offer. Spending time with friends and family, traveling, golf, taking care of my cat, runescape, and attempting to <b>learn something new every day</b>.</p>
                </div>
                <img src={photo1}>
                </img>
            </div>
        </div>
    );
}
export default LandingPage

