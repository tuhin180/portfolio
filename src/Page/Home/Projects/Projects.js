import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery({
    queryKey: ["Pojects"],
    queryFn: () =>
      fetch("http://localhost:5000/projects").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(projects);
  return (
    <>
      <div className="mt-4 mx-auto sm:w-full md:w-1/2">
        <h1
          id="about"
          className="uppercase text-center text-2xl  font-extrabold  "
        >
          Projects
        </h1>
        <div className="mt-4 mx-auto w-8 bg-primary p-[2px]"></div>
        <p className="text-center">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-14 p-10">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </div>
    </>
  );
};

export default Projects;
