import "../style/style.css";
import React, { Component, useState } from "react";

const LandingPage = () => {
    return(
        <div>
        <header class="page-nav">
            <h2 class="logo">
                Matt McCall
            </h2>
            <a href="/" class="nav">whoami</a>
            <a href="" class="nav">projects</a>
            <a href="" class="nav">resume download</a>
        </header>
        <nav class="top-nav">Nav</nav>
            <main class="page-main">
            <div class="overview">
            whoami
            </div>
            <div class="main-container">
            <p>I am a developer diving into web development. The goal of this website is to display projects outside of my job. Here is a working list of things I want to do.</p>
            </div>
            <div class="list">
            <ul>
                <li> -Fix UI/UX of this dumpster fire</li>
                <li> -API GO Development/Implementation</li>
                <li> -Connect to cloud db with login and auth</li>
                <li> -Docker/Kubernetes</li>
                <li> -If I am feeling good convert the whole thing to Rust/yew.rs</li>
            </ul>
            </div>
        </main>
        </div>
    );
}
export default LandingPage