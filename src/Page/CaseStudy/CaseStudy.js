import { Link, useLoaderData } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import banner from "../../assets/image/banner2.jpg";

const CaseStudy = () => {
  const data = useLoaderData();

  const { img, title, description, overview, tools, livelink } = data[0];

  return (
    <div className="mt-20 dark:bg-black dark:text-white">
      <section
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-3 py-20 lg:flex lg:h-screen lg:items-center ">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-xl font-extrabold text-transparent md:text-5xl">
              {title}
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-white">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a target="_blank" rel="noreferrer" href={livelink}>
                <PrimaryButton name={"Live Link"} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-8 w-1/2 mx-auto">
        <img className="w-full" src={img} alt="" />
        <h1 className="text-2xl font-bold mt-4 uppercase ">Project Overview</h1>
        <p className="mt-6">{overview}</p>
        <h2 className="text-2xl font-bold mt-4 uppercase">Tool Used</h2>
        <div className="flex flex-wrap gap-4 mt-8 w-full md:w-4/6 ">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-lg bg-slate-200 text-center  block dark:bg-transparent dark:border-2 dark:border-x-white dark:border-y-blue-500"
            >
              {tool}
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mt-4 uppercase">See live</h3>
        <div className="flex gap-4 mt-8">
          <a target="_blank" rel="noreferrer" href={livelink}>
            <PrimaryButton name={"Live Link"} />
          </a>
          <Link to="/">
            <button className="btn uppercase px-7 bg-transparent text-black hover:text-white dark:bg-transparent dark:text-white">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
