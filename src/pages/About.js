import React from "react";
import Collapse from "../components/Collapse";
import CollapseContent from "../components/CollapseContent";

const About = () => {
  const datasCollapse = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
      type: "description",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      type: "description",
    },
    {
      title: "Service",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.      ",
      type: "description",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      type: "description",
    },
  ];

  return (
    <>
      <div className="imageBackgroundMountain"></div>
      <section className="about-container">
        {datasCollapse.map((data) => (
          <Collapse title={data.title}>
            <CollapseContent content={data.content} type={data.type} />
          </Collapse>
        ))}
      </section>
    </>
  );
};

export default About;
