import React from "react";

const BannerContent = () => {
  return (
    <div className="banner-content text-white h-full flex flex-col justify-end pl-20 pb-20">
      <h1 className="text-9xl font-normal uppercase">Design</h1>
      <h2 className="text-9xl font-normal pl-15 uppercase">& Freedom</h2>
      <div className="pl-15 pt-6 relative">
        <p className="text-sm max-w-[450px] text-[#b3b3b3]">
          Explore Independent Style by Embracing Uniqueness with our Exclusive
          Designer Apparel
        </p>
        <button className="flex items-center justify-between gap-2.5 absolute right-[82px] bottom-0 cursor-pointer text-[#b3b3b3] uppercase">
          <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#373b35] border border-gray-400">
            <i class="ri-arrow-down-line"></i>
          </span>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BannerContent;
