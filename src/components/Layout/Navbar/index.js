import React from "react";

const Navbar = (props) => {
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand float-left">Clicky Memory Game</div>

        <div className="scores">
            <div className="current-score">
            {/* Score: {score} |
            Top Score: {topScore}  */}
            </div>
        </div>

    </nav>
    );
};

    
export default Navbar;