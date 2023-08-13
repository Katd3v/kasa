import React from "react";
import Appartements from "../components/Appartements";

const Home = () => {
  return (
    <>
      <main>
        <section className="title">
          <div>
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        </section>
        <section className="gallery">
          <Appartements />
        </section>
      </main>
    </>
  );
};

export default Home;
