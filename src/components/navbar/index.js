import React from "react";
import "./style.css";

const navbar = () => {

    return(
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
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
    
export default navbar;