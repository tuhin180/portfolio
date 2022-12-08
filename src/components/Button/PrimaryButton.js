import React from "react";

const PrimaryButton = ({ name, classes, handler }) => {
  return (
    <button
      className={`text-white btn bg-gradient-to-r from-blue-700 via-blue-400 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${classes}`}
      onClick={handler}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
