import React from "react";

const Card = ({
   
    id, 
    name, 
    image, 
})=> {

  return (
  <div className="col mb-3 mt-3" >
    {/* <div className="card m-3" onClick={()=>clickHandler(id)}>     */}
      <img className="img-fluid img-thumbnail" src={image} alt={name}></img>
    </div>
  </div>
  )
};


export default Card;

