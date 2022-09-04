import React from "react";
//import { render, reactDom } from "react-dom";
import { Route, BrowserRouter, Routes} from 'react-router-dom'

import LandingPage from "./components/LandingPage";

const App = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <>
                    <LandingPage />
                </>
            }/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;