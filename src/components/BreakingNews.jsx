"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex rounded my-2 py-1.5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 gap-4">
      <h2 className="text-xl text-red-500 font-bold">Breaking</h2>
      <Marquee
        speed={50}
        className=""
      >
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
