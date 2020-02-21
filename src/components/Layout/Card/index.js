import React from "react";
// import PropTypes from 'prop-types';

// const propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
// };

const rmCard = ({
    id,
    name,
    image,
}) => { 
  return (
    <div className="card mb-3">
      <img alt={name} src={image} />
    </div>
  )};

// Card.propTypes = propTypes;

export default rmCard;