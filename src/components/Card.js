import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ appartement }) => {
  return (
    <div className="card">
      <NavLink to={`/appartements/${appartement.id}`}>
        <img src={appartement.pictures[0]} alt={appartement.title} />
        <h2>{appartement.title}</h2>
      </NavLink>
    </div>
  );
};

export default Card;
