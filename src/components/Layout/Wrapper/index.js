import React from "react";

function Wrapper (props) {
  return(
    <div className="container mb-5 mt-5 pt-5">
      <div className="row">
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper;

//import Card into wrapper - use Map
//import data from rm.json
