import React from "react";

const About = () => {
  return (
    <div className="about flex gap-3 mt-3 mx-3">
      <div className="about-left text-[#b3b3b3] flex flex-col justify-evenly flex-1 p-8 rounded-md bg-[#1e1e1e]">
        <p className="uppercase font-semibold">About</p>
        <h2 className="text-white uppercase text-5xl">
          Where Fashion Meets Freedom
        </h2>
        <div className="flex gap-10">
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            quas? Commodi, provident recusandae magni necessitatibus explicabo,
            ex nobis enim quibusdam blanditiis sed saepe officiis quasi, nostrum
            vel molestias! Debitis, optio.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            quas? Commodi, provident recusandae magni necessitatibus explicabo,
            ex nobis enim quibusdam blanditiis sed saepe officiis quasi, nostrum
            vel molestias! Debitis, optio.
          </p>
        </div>
      </div>
      <div className="about-right flex flex-1 rounded-md"></div>
    </div>
  );
};

export default About;
