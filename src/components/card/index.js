import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

const Card = ({
    id,
    name,
    image,
}) => { 
  return (
    <div className="card">
      <img alt={name} src={image} />
    </div>
  )};

Card.propTypes = propTypes;

export default Card;