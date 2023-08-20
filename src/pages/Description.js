import React from "react";
import Carrousel from "../components/Carrousel";
import logements from "../logements.json";
import { useParams } from "react-router-dom";

const Description = (props) => {
  const { id } = useParams();
  const appartement = logements.logements.filter(
    (logement) => logement.id === id
  )[0];

  return (
    <div>
      <Carrousel images={appartement.pictures} title={appartement.title} />
    </div>
  );
};

export default Description;
