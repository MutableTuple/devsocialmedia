import React from "react";

export default function FollowActionButtons({ children, primary }) {
  return (
    <button
      className={`w-fit text-sm sm:text-md font-medium px-4 py-2 hover:bg-black hover:text-white  ${
        primary ? "bg-black" : "border-stone-950 border-2"
      } ${primary ? "text-white" : "text-stone-900"}`}
    >
      {children}
    </button>
  );
}
