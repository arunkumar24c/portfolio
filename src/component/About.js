import React from "react";

const About = () => {
  return (
    <div
      name="ABOUT"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <h1 className="text-3xl mt-20 text-justify">
          Hi! My Name is Arun Kumar
        </h1>
        <p className="text-xl mt-20 text-justify">
          I am frontend developer, I have expertise in HTML, CSS,
          JavaScript,Bootstrap and popular frameworks such as React.js Tailwind
          .
        </p>
        <br />
        <p className="text-xl text-justify">
          I create visually appealing and user-friendly interfaces with a focus
          on detail, and stay up-to-date with the latest frontend technologies
          and best practices. I am skilled in troubleshooting , and have a
          passion for creating seamless user experiences. I have Good
          communication skills and a proven ability to collaborate with
          developers.
        </p>
      </div>
    </div>
  );
};

export default About;
