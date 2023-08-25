import React, { useState } from "react";

const Collapse = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`about-block ${isOpen ? "open" : ""}`}>
      <div className="about-title">
        <h3>{title}</h3>
        <button onClick={toggleCollapse}>
          <img
            className={`arrow ${isOpen ? "open" : ""}`}
            src="/arrow_open.png"
            alt={isOpen ? "flèche fermante" : "flèche ouvrante"}
          />
        </button>
      </div>
      <div className="collapse-container">
        <div className={`collapse-content ${isOpen ? "openContain" : ""}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
