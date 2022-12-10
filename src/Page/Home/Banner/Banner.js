import React from "react";
import banner from "../../../assets/image/banner2.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";
const Banner = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="mx-auto max-w-screen-xl px-3 py-20 lg:flex lg:h-screen lg:items-center ">
          <div className="bg-white flex flex-col p-5 gap-3 ">
            <Link className="hover:text-primary">
              <FaFacebook className="text-4xl" />
            </Link>
            <Link className="hover:text-primary">
              <FaGithub className="text-4xl" />
            </Link>
            <Link className="hover:text-primary">
              <FaLinkedin className="text-4xl" />
            </Link>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent md:text-5xl">
              HEY,I'M MD.TUHIN HOSSAIN
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-white">
              Seeking roles to utilise my in-depth knowledge of UI/UX
              development and responsive designing to create exceptional
              interfaces and user experiences.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link>
                <PrimaryButton name={"projects"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
