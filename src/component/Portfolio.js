import React from "react";
import Ecom from "../assets/Ecommerces.png";
import todo from "../assets/Todo list.png";
import weather from "../assets/weather.png";
import movie from "../assets/movie.png";
import count from "../assets/count down.png";
import birthday from "../assets/birthday remainder.png";


const Portfolio = () => {
  // array
  const portfolios = [
    {
      id: 1,
      src: Ecom,
    },
    {
      id: 2,
      src: birthday,
    },
    {
      id: 3,
      src: count,
    },
    {
      id: 4,
      src: movie,
    },
    {
      id: 5,
      src: weather,
    },
    {
      id: 6,
      src: todo,
    },
  ];

  return (
    <div
      name="PORTFOLIO"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">check out some of my work right here </p>
        </div>

        <div className="grid sm:grid-cols-2 md:cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md w-30 duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className=" px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
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
