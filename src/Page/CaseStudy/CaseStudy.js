import React from "react";
import { useLoaderData } from "react-router-dom";

const CaseStudy = () => {
  const data = useLoaderData();

  const { img, title, description, overview, tools, livelink } = data[0];

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default CaseStudy;
