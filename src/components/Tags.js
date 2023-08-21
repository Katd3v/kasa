import React from "react";

const Tags = ({ tags }) => {
  return (
    <div>
      <ul className="tag-contain">
        {tags.map((tag) => (
          <li className="tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
