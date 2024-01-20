import React from "react";
import Movie from "../assets/portfolio/Movie.png";
import Landingpage from "../assets/portfolio/landingpage.png";
import Todos from "../assets/portfolio/todos.png";
import RealEstate from "../assets/portfolio/realestate.png";
import Zomato from "../assets/portfolio/zomato.png";
import UsabilityHub from "../assets/portfolio/usabilityhub.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Movie,
      desc: "Movies and TV Shows Web Application",
      demo: "https://movix-shows.netlify.app/",
      code: "https://github.com/iamrupnath/Movix"
    },
    {
      id: 2,
      src: Landingpage,
      desc: "Online Education Website Landing page",
      demo: "https://education-react-landing-page.netlify.app/",
      code: "https://github.com/iamrupnath/landing-page"
    },
    {
      id: 3,
      src: Todos,
      desc: "A Simple To Do List Website",
      demo: "https://toodoslist.netlify.app/",
      code: "https://github.com/iamrupnath/todoslist"
    },
    {
      id: 4,
      src: RealEstate,
      desc: "Single Real Estate Property Website",
      demo: "https://real-estates-react.netlify.app/",
      code: "https://github.com/iamrupnath/Real-Estate-react"
    },
    {
      id: 5,
      src: Zomato,
      desc: "Zomato Clone Food Delivery Website",
      demo: "https://iamrupnath.github.io/zomato-clone/",
      code: "https://github.com/iamrupnath/zomato-clone"
    },
    {
      id: 6,
      src: UsabilityHub,
      desc: "UsabilityHub Website Clone",
      demo: "https://iamrupnath.github.io/usabilityhubclone/",
      code: "https://github.com/iamrupnath/usabilityhubclone"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({id, src, desc, demo, code  }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className='p-2 text-justify font-extralight'>{desc}</p>

              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={demo}>Demo</a>
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
