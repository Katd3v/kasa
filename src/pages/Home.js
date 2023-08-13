import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Appartements from "../components/Appartements";
import Logo_white from "../components/Logo_white";

const Home = () => {
  return (
    <>
      <header>
        <Logo />
        <Navigation />
      </header>
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
      <footer>
        <Logo_white />
        <div>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
