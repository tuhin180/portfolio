import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className="mt-16 sm:p-10 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-end">
          <div className="sm:w-full md:w-3/4 ">
            <h1 className=" mt-10 text-white text-xl text-left font-bold uppercase">
              MD.Tuhin Hossain
            </h1>
            <p className="mt-8 text-white text-left">
              Seeking roles to utilise my in-depth knowledge of UI/UX
              development and responsive designing to create exceptional
              interfaces and user experiences
            </p>
          </div>
          <div>
            <h1 className="text-white font-bold uppercase text-2xl text-center">
              Social
            </h1>
            <div className="flex justify-center gap-2 mt-4">
              <Link>
                <FaFacebook className="text-white text-2xl  " />
              </Link>
              <Link>
                <FaGithub className="text-white text-2xl  " />
              </Link>
              <Link>
                <FaLinkedin className="text-white text-2xl  " />
              </Link>
            </div>
          </div>
        </div>
        <hr className="mt-4"></hr>
        <h4 className="text-sm text-white text-center">
          © Copyright 2022. Made by{" "}
          <Link className="uppercase underline underline-offset-1">
            MD.Tuhin Hossain
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
