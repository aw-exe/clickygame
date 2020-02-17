import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

const FriendCard = ({
    id,
    name,
    image,
}) => (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
      <div className="content">
    </div>
  );

card.propTypes = PropTypes;

export default card;