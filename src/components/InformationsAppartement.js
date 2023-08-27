import React from "react";
import Collapse from "./Collapse";
import CollapseContent from "./CollapseContent";
import Tags from "./Tags";
import Rating from "./Rating";

const InformationsAppartement = ({ appartement }) => {
  return (
    <div>
      <div className="presentationAppartement">
        <div className="containTitleTags">
          <div className="title-appart">
            <h2>{appartement.title}</h2>
            <p>{appartement.location}</p>
          </div>
          <div>
            <Tags tags={appartement.tags} />
          </div>
        </div>
        <div className="hostRating">
          <div className="host-appart">
            <p>{appartement.host.name}</p>
            <img
              src={appartement.host.picture}
              alt={`Photo de l'hôte : ${appartement.host.name}`}
            />
          </div>
          <div>
            <Rating rating={appartement.rating} />
          </div>
        </div>
      </div>
      <div className="info-collapse">
        <Collapse title="Description">
          <CollapseContent
            type="description"
            content={appartement.description}
          />
        </Collapse>
        <Collapse title="Équipement">
          <CollapseContent type="liste" content={appartement.equipments} />
        </Collapse>
      </div>
    </div>
  );
};

export default InformationsAppartement;
