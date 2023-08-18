import React from "react";
import Card from "./Card";

const Appartements = ({ data, loading }) => {
  return (
    <div>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <div className="cards-container">
          {data.logements.map((appartement) => (
            <Card key={appartement.id} appartement={appartement} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Appartements;
