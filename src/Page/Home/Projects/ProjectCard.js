import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const ProjectCard = ({ project }) => {
  const { _id, img, title, description } = project;
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img
          style={{ objectFit: "cover" }}
          className="rounded-t-lg w-full "
          src={img}
          alt=""
        />
      </div>
      <div
        className="  w-full md:w-3/4 grid content-center"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="text-2xl font-bold text-center md:text-left ">
          {title}
        </h1>
        <p className="m-4 text-xl sm:text-center md:text-left">{description}</p>
        <div className="text-center md:text-left">
          <Link to={`/project/${_id}`}>
            <PrimaryButton name={"Case study"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
