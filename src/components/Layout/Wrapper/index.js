import React from "react";
import Card from '../Card';
// import rm from './rm.json';


function Wrapper (props) {

  const Card = props.Card;


  return(
    <div className="container mb-5 mt-5 pt-5">
      <div className="row">
        {/* {props.children} */}
         {Card.map((Card)) (
          <Card
          id={Card.toString()}
          key={Card.toString()}
          image={Card.toString()}
        />
      )};
      </div>
    </div>
  );
};

// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

export default Wrapper;

//import data from rm.json


