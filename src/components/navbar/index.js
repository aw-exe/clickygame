import React from "react";
import "./style.css";

const Navbar = () => {

    return(
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
        <ul>
        <li className="navbar-brand">Clicky Memory Game</li>
        <li className="navbar-brand float-right">
            Score:
            |
            Top Score:

        </li>
        </ul>
    </nav>
    );
};
    
export default Navbar;