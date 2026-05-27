"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex gap-3 rounded my-2">
      <h2 className="text-xl font-bold">Breaking</h2>
      <Marquee
        gradient={true}
        speed={50}
        className="bg-red-500 text-white rounded"
      >
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
