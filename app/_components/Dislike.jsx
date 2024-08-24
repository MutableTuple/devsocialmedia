import React from "react";
import { GrDislike } from "react-icons/gr";

export default function Dislike({ size = 18 }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="border w-10 h-10 flex items-center justify-center text-stone-700 rounded-full hover:text-red-500 hover:cursor-pointer hover:bg-red-50 duration-300 transition-all">
        <GrDislike size={size} />
      </div>
      <p className="text-center text-xs text-red-500">2</p>
    </div>
  );
}
