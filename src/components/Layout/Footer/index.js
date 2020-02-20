import React from "react";

const Footer = () => {

    return(
    
    <div className="footer" style={style.footer}> 
        <div className="container"></div>
        <div className="text-center" style={style.text}>Copyright</div>
        <div className="text-center" style={style.text}>https://github.com/aw-exe</div>

    </div>
    );
};

const style = {
    footer: { 
        position: 'fixed',
        alignment: 'centered',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#343a40',
        padding: '5px'
    },

    text: {
        color: '#fdfeff'
    }
};
    
export default Footer;