import React, { useState } from "react";

const Collapse = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={`collapse ${isOpen ? "open" : ""}`}>
      <h3>{title}</h3>
      <button onClick={toggleCollapse}>
        <img
          src={isOpen ? "./arrow_close.png" : "./arrow_open.pgn"}
          alt={isOpen ? "flèche fermante" : "flèche ouvrante"}
        />
      </button>
      {children}
    </section>
  );
};

export default Collapse;
