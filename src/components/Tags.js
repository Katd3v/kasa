import React from "react";

const Tags = ({ appartement }) => {
  return (
    <div>
      <ul>
        {appartement.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
