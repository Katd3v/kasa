import React from "react";

const Tags = ({ tags }) => {
  return (
    <div>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
