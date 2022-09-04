import React from "react"

import "../style/nav.css";

const Nav = () => {
    return(
    <div className="page-nav">
        <h2 className="logo">
            MM
        </h2>
        <a href="/" className="nav">whoami</a>
        <a href="" className="nav">blog</a>
        <a href="" className="nav">projects</a>
        <a href="" className="nav">resume download</a>
    </div>
    )
}

export default Nav
