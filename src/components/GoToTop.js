import React from "react";
import { FaArrowUp } from "react-icons/fa";
const GoToTop = () => {
  const gotoTopBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="top-btn text-right " onClick={gotoTopBtn}>
      <button className="btn- btn-primary px-3 py-3 rounded-md  ">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default GoToTop;
