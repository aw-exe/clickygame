import React from "react";

const Navbar = () => {

    return(
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul>
        <li className="navbar-brand float-left">Clicky Memory Game</li>
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