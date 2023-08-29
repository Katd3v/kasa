import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="messageError">
      <p className="codeError">404</p>
      <p className="textError">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </section>
  );
};

export default PageNotFound;
