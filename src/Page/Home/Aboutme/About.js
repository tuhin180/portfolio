import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const About = () => {
  return (
    <>
      <div className="  mt-4 mx-auto sm:w-full md:w-1/2  ">
        <h1
          id="about"
          className="uppercase text-center text-4xl  font-extrabold "
        >
          About Me
        </h1>
        <div className="mt-4 mx-auto w-8 bg-primary p-[2px]"></div>
        <p className="text-center ">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 sm:w-full md:w-10/12 mx-auto mt-8 gap-10">
        <div className="sm:text-center md:text-left">
          <h1 className="font-bold text-2xl">Get to know me!</h1>
          <p className="mt-8">
            I'm a <strong>Frontend Web Developer</strong> building the Front-end
            of Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the
            <strong>Projects</strong> section.
            <br /> I also like sharing content related to the stuff that I have
            learned over the years in <strong>Web Development</strong> so it can
            help other people of the Dev Community. Feel free to Connect or
            Follow me on my.
            <Link className="text-primary font-bold underline">Linkedin</Link>
            where I post useful content related to Web Development and
            Programming <br /> I'm open to <strong>Job</strong> opportunities
            where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to <strong>contact</strong> me.
          </p>
          <div className="text-center md:text-left">
            <PrimaryButton classes={"mt-5"} name={"contact"}></PrimaryButton>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Skill</h1>
          <div className="flex flex-wrap gap-4 mt-8 w-4/6">
            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              React js
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              Node Js
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              MongoDB
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              Html
            </div>

            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              Express Js
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              Java Script
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              Tailwind Css
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              Git
            </div>

            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              BootsStap
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              Figma
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              Vercel
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500">
              CSS
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
