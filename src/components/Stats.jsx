import React from "react";

const Stats = () => {
  return (
    <div className="stats-section flex justify-between gap-3 m-3">
      <div className="stat-info p-8">
        <p className="text-[#b3b3b3] text-xs uppercase">Designers</p>
        <h4 className="text-white text-4xl tracking-wider">150+</h4>
      </div>
      <div className="stat-info p-8">
        <p className="text-[#b3b3b3] text-xs uppercase">Clients</p>
        <h4 className="text-white text-4xl tracking-wider">500+</h4>
      </div>
      <div className="stat-info p-8">
        <p className="text-[#b3b3b3] text-xs uppercase">Masterpieces</p>
        <h4 className="text-white text-4xl tracking-wider">20k+</h4>
      </div>
      <div className="stat-info p-8">
        <p className="text-[#b3b3b3] text-xs uppercase">Events</p>
        <h4 className="text-white text-4xl tracking-wider">50+</h4>
      </div>
    </div>
  );
};

export default Stats;
