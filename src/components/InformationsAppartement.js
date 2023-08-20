import React from "react";

const InformationsAppartement = ({ appartement }) => {
  return (
    <div>
      <div>
        <h2>{appartement.title}</h2>
        <p>{appartement.location}</p>
      </div>
      <div>
        <p>{appartement.host.name}</p>
        <img
          src={appartement.host.picture}
          alt={`Photo de l'hôte : ${appartement.host.name}`}
        />
      </div>
    </div>
  );
};

export default InformationsAppartement;
