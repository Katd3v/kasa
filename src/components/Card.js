import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ appartement }) => {
  return (
    <div className="card">
      <NavLink to={`/appartements/${appartement.id}`}>
        <img src={appartement.cover} alt={appartement.title} />
        <span>{appartement.title}</span>
      </NavLink>
    </div>
  );
};

export default Card;
