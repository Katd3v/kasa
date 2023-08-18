import React, { useState } from "react";

const Collapse = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about-block">
      <div className="about-title">
        <h3>{title}</h3>
        <button onClick={toggleCollapse}>
          <img
            src={isOpen ? "./arrow_close.png" : "./arrow_open.png"}
            alt={isOpen ? "flèche fermante" : "flèche ouvrante"}
          />
        </button>
      </div>
      <div className={`${isOpen ? "open" : "close"}`}>{children}</div>
    </div>
  );
};

export default Collapse;
