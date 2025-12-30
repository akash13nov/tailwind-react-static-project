import React from "react";

const Card = () => {
  return (
    <div className="cards flex gap-3 m-3">
      <div className="box flex flex-col justify-center p-8 rounded-md bg-[#1e1e1e] text-[#b3b3b3]">
        <h4 className="uppercase pb-4 font-semibold">Independency</h4>
        <p className="pb-7">
          Explore the creativity of independent designers from around the globe
        </p>
        <button className="flex items-center gap-2.5 cursor-pointer text-[#b3b3b3] uppercase">
          <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#373b35] border border-gray-400">
            <i class="ri-arrow-right-up-line"></i>
          </span>
          Learn More
        </button>
      </div>
      <div className="box flex flex-col justify-center p-8 rounded-md bg-[#1e1e1e] text-[#b3b3b3]">
        <h4 className="uppercase pb-4 font-semibold">Uniquity</h4>
        <p className="pb-7">
          Discover the charm of unique pieces that stand out effortlessly
        </p>
        <button className="flex items-center gap-2.5 cursor-pointer text-[#b3b3b3] uppercase">
          <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#373b35] border border-gray-400">
            <i class="ri-arrow-right-up-line"></i>
          </span>
          Learn More
        </button>
      </div>
      <div className="box flex flex-col justify-center p-8 rounded-md bg-[#1e1e1e] text-[#b3b3b3]">
        <h4 className="uppercase pb-4 font-semibold">Quality</h4>
        <p className="pb-7">
          Experience Unpralleled craftsmanship and attention to detail
        </p>
        <button className="flex items-center gap-2.5 cursor-pointer text-[#b3b3b3] uppercase">
          <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#373b35] border border-gray-400">
            <i class="ri-arrow-right-up-line"></i>
          </span>
          Learn More
        </button>
      </div>
      <div className="box flex flex-col justify-center p-8 rounded-md bg-[#1e1e1e] text-[#b3b3b3]">
        <h4 className="uppercase pb-4 font-semibold">Sustanibility</h4>
        <p className="pb-7">
          Embrace eco consious fashion choices without compromising in style.
        </p>
        <button className="flex items-center gap-2.5 cursor-pointer text-[#b3b3b3] uppercase">
          <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#373b35] border border-gray-400">
            <i class="ri-arrow-right-up-line"></i>
          </span>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
