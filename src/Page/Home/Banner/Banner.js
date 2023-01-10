import React from "react";
import banner from "../../../assets/image/banner2.jpg";
import bannervideo from "../../../assets/image/baner.mp4";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import PrimaryButton from "../../../components/Button/PrimaryButton";
const Banner = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-3 py-20 lg:flex lg:h-screen lg:items-center ">
          <div className=" first-letter:bg-transparent flex flex-col md:top-36 lg:top-0 gap-3 invisible md:visible">
            <a
              href="https://www.facebook.com/Tuhinhossain91/"
              className="text-white hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-4xl" />
            </a>
            <a
              href="https://github.com/tuhin180"
              className="text-white hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-tuhin-hossain-5730a022b/"
              className=" text-white hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-4xl" />
            </a>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent md:text-5xl">
              HEY,I'M MD.TUHIN HOSSAIN
            </h1>
            <div className="mt-4 text-xl text-white dark:text-white">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Seeking roles to utilise my in-depth knowledge of UI/UX development and responsive designing to create exceptional interfaces and user experiences."
                    )
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(2500)

                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/#projects">
                <PrimaryButton name={"projects"} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1X1VNkv0WVJsQ_SGM-0kKeSBuKYN2_JMw/view?usp=sharing"
              >
                {/* <PrimaryButton
                  classes={"bg-white"}
                  handler={handleResume}
                  name={"Resume"}
                /> */}
                <button className="btn bg-transparent uppercase text-white px-8 hover:bg-white hover:text-black">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
