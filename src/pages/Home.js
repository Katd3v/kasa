import React, { useEffect, useState } from "react";
import Appartements from "../components/Appartements";
import logements from "../logements.json";

const Home = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setdata(logements);
    setLoading(false);
  }, []);

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
        <Appartements data={data} loading={loading} />
      </section>
    </>
  );
};

export default Home;
