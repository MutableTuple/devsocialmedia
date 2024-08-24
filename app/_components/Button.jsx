import React from "react";

export default function Button({ children, primary }) {
  return (
    <button
      className={`w-fit text-xs sm:text-md font-medium sm:px-4 sm:py-2 px-1 py-1 hover:bg-black hover:text-white  ${
        primary ? "bg-black" : "border-stone-950 border-2"
      } ${primary ? "text-white" : "text-stone-900"}`}
    >
      {children}
    </button>
  );
}
