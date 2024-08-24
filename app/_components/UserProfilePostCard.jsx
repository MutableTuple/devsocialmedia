import React from "react";
import Likes from "./Likes";
import Dislike from "./Dislike";
import { GrDislike, GrLike } from "react-icons/gr";

export default function UserProfilePostCard({
  src,
  caption,
  likes,
  dislikes,
  comments,
}) {
  return (
    <div className="border p-2 flex flex-col gap-2">
      {" "}
      <img src={src} alt="" />
      <p className="text-xs md:text-base text-stone-600"> {caption}</p>
      <div className="flex gap-4 text-center items-center   text-xs">
        <p className="flex items-center flex-col text-green-600 ">
          {/* <GrLike /> */}
          &middot;210
        </p>
        <p className="flex items-center text-red-600 flex-col">
          {/* <GrDislike /> */}
          &middot;12
        </p>
      </div>
    </div>
  );
}
