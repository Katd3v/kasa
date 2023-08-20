import React from "react";

const CollapseContent = ({ type, content }) => {
  return type === "liste" ? (
    <ul>
      {content.map((equipement) => (
        <li key={equipement}>{equipement}</li>
      ))}
    </ul>
  ) : (
    <div className="about-content">
      <p>{content}</p>
    </div>
  );
};

export default CollapseContent;
