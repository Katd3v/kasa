import axios from "axios";
import React, { useEffect } from "react";

const Appartements = () => {
  useEffect(() => {
    axios
      .get(process.env.PUBLIC_URL + "/backend/logements.json")
      .then((res) => console.log(res.data));
  }, []);

  return <div></div>;
};

export default Appartements;
