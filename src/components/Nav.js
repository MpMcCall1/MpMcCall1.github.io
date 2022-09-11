import React from "react"

import "../style/nav.css";
import githubIcon from "../../public/icons/github-icon.png";

const Nav = () => {
    return(
    <div className="page-nav">
        <h2 className="logo">
            MM
        </h2>
        <a href="#whoami" className="nav">whoami</a>
        {/* <a href="" className="nav">blog</a> */}
        <a href="#projects" className="nav">projects</a>
        {/* <a href="" className="nav">resume download</a> */}
    </div>
    )
}

export default Nav
