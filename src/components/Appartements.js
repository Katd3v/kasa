import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Appartements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.PUBLIC_URL + "/backend/logements.json")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="cards-container">
      {data.map((appartement) => (
        <Card key={appartement.id} appartement={appartement} />
      ))}
    </div>
  );
};

export default Appartements;
