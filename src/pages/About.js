import React from "react";
import Collapse from "../components/Collapse";
import CollapseContent from "../components/CollapseContent";

const About = () => {
  const datasCollapse = [
    {
      title: "Fiabilité",
      content: "blabla",
      type: "description",
    },
    {
      title: "Respect",
      content: "blabla",
      type: "description",
    },
    {
      title: "Service",
      content: "blabla",
      type: "description",
    },
    {
      title: "Sécurité",
      content: "blabla",
      type: "description",
    },
  ];

  return (
    <>
      <div className="imageBackgroundMountain"></div>
      <section>
        {datasCollapse.map((data) => (
          <Collapse title={data.title}>
            <CollapseContent content={data.content} type={data.type} />
          </Collapse>
        ))}
      </section>
    </>
  );
};

export default About;
