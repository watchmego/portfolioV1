import React from "react";
import { ProjectCards } from "./ProjectCard";
const Projects = () => {
  return (
    <div className="px-10">
      {ProjectCards.map((Card, idx) => {
        return (
          <div key={idx}>
            <Card />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
