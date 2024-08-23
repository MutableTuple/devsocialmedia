import React from "react";

export default function IconContainer({ children }) {
  return (
    <div className="border w-10 h-10 flex items-center justify-center text-stone-700 rounded-full hover:text-red-500 hover:cursor-pointer hover:bg-stone-50 duration-300 transition-all">
      {children}
    </div>
  );
}
