import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <section>
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </section>
      <section>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </section>
    </>
  );
};

export default PageNotFound;
