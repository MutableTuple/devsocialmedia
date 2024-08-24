import React from "react";
import { GrLike } from "react-icons/gr";

export default function Likes({ size = 18 }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="border w-10 h-10 flex items-center justify-center text-stone-700 rounded-full hover:text-green-500 hover:cursor-pointer hover:bg-green-50 duration-300 transition-all">
        <GrLike size={size} />
      </div>
      <p className="text-center text-xs text-green-500">210</p>
    </div>
  );
}
