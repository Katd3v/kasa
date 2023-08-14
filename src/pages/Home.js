import React from "react";
import Appartements from "../components/Appartements";

const Home = () => {
  return (
    <>
      <section className="imageBackgroundBeach">
        <div>
          <h1>
            Chez vous, <span></span> partout et ailleurs
          </h1>
        </div>
      </section>
      <section className="cards-appartements">
        <Appartements />
      </section>
    </>
  );
};

export default Home;
