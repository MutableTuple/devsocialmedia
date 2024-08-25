import React from "react";
export default async function UserStoryCircle({ src, name = "user" }) {
  //  filter grayscale-0  contrast-200
  return (
    <div className="flex items-center flex-col gap-2 hover:cursor-pointer ">
      <div className="h-14 min-w-14 outline overflow-hidden outline-offset-4 rounded-full outline-stone-500">
        <img className="h-full w-full object-cover " src={src} alt="" />
      </div>
      <p className="text-xs text-center">{name}</p>
    </div>
  );
}
