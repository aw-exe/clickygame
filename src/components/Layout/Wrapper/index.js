import React from "react";
import Card from '../Card';
// import rm from './rm.json';


function Wrapper (props) {
  return(
    <div className="container mb-5 mt-5 pt-5">
      <div className="row">
        {/* {props.children} */}
         {Card.map(Card => (
          <Card
          id={Card.id}
          key={Card.id}
          image={Card.image}
        />
      ))};
      </div>
    </div>
  );
};

export default Wrapper;

//import data from rm.json
