import React from "react";

const Header = () => {
  return (
    <div className="navbar flex items-center justify-between px-3 py-3">
      <div className="logo">
        <h3 className="font-display text-2xl text-white">DVSY</h3>
      </div>
      <div className="navs flex items-center justify-between">
        <ul className="flex items-center justify-between gap-2.5">
          <li className="flex">
            <a
              className="uppercase text-[#b3b3b3] px-3 py-3 bg-[#201e1d] rounded-md"
              href=""
            >
              designers
            </a>
          </li>
          <li className="flex">
            <a
              className="uppercase text-[#b3b3b3] px-3 py-3 bg-[#201e1d] rounded-md"
              href=""
            >
              collabs
            </a>
          </li>
          <li className="flex">
            <a
              className="uppercase text-[#b3b3b3] px-3 py-3 bg-[#201e1d] rounded-md"
              href=""
            >
              events
            </a>
          </li>
          <li className="flex">
            <a
              className="uppercase text-[#b3b3b3] px-3 py-3 bg-[#201e1d] rounded-md"
              href=""
            >
              blog
            </a>
          </li>
          <li className="flex">
            <a
              className="uppercase text-[#b3b3b3] px-3 py-3 bg-[#201e1d] rounded-md"
              href=""
            >
              card
            </a>
          </li>
          <li className="flex">
            <a
              className="uppercase text-black px-3 py-3 bg-[#ea7055] rounded-md"
              href=""
            >
              get in touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
