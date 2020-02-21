import React from "react";

const Navbar = () => {

    return(
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul>
        <li className="navbar-brand float-left">Clicky Memory Game</li>
        <li className="navbar-brand float-right" style={style.score}>
            Score:
            |
            Top Score:

        </li>
        </ul>
    </nav>
    );
};

const style = {
    score: {
        alignment: 'right'
    }
}
    
export default Navbar;