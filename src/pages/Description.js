import React from "react";
import Carrousel from "../components/Carrousel";
import logements from "../logements.json";
import { useParams } from "react-router-dom";
import InformationsAppartement from "../components/InformationsAppartement";

const Description = () => {
  const { id } = useParams();
  const appartement = logements.logements.filter(
    (logement) => logement.id === id
  )[0];

  return (
    <div>
      <Carrousel appartement={appartement} />
      <InformationsAppartement appartement={appartement} />
    </div>
  );
};

export default Description;
