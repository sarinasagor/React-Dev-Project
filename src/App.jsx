//import { useState } from 'react'

import {HashRouter as Router, Route, Routes} from 'react-router-dom';

import {NavBar} from "./components";
import {About, Home, Services, Contact} from "./pages";

function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App
