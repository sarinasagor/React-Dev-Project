import React from "react";
import {NavLink} from "react-router-dom";


function Navbar() {

    const getLinkClass = (isActive) => isActive
        ? "text-white bg-cyan-950 px-4 py-2 rounded"
        : "text-white hover:text-cyan-300 hover:bg-cyan-800 px-4 py-2 rounded";

    return (
        <nav className="bg-gray-800 shadow-lg p-4">
            <ul className="flex space-x-4">
                <li>
                    <NavLink to="/" className={({isActive}) => getLinkClass(isActive)}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => getLinkClass(isActive)}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services" className={({isActive}) => getLinkClass(isActive)}>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => getLinkClass(isActive)}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;