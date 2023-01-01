import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
