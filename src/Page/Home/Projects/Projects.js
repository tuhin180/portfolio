import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import Spinner from "../../../components/Spinner/Spinner";
const Projects = () => {
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery({
    queryKey: ["Pojects"],
    queryFn: () =>
      fetch("https://portfolio-server-rho.vercel.app/projects").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;
  console.log(projects);
  return (
    <>
      <div
        className="mt-4 mx-auto sm:w-full md:w-1/2"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h1
          id="projects"
          className="uppercase text-center text-4xl  font-extrabold  "
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
