import React from "react";
import BreakingNews from "@/components/BreakingNews";

const Mainlayout = ({ children }) => {
  return (
    <div>
      <BreakingNews />
      {children}
    </div>
  );
};

export default Mainlayout;
