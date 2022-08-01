import React from "react";
//import { render, reactDom } from "react-dom";
import { Route, BrowserRouter, Routes} from 'react-router-dom'

import "./style/style.css";

import LandingPage from "./components/LandingPage";

const App = () => {
    //return <LandingPage />
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="projects" element={<div>Projects</div>} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;