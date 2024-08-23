import React from "react";
import VariableUserImage from "./VariableUserImage";
import { HiOutlineDotsVertical } from "react-icons/hi";
import IconContainer from "./IconContainer";
import { GrLike, GrDislike } from "react-icons/gr";
export default function UserPosts({
  userImage = "https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds",
  username = "Jeff Bezos",
  followers = "9.82M",
  caption = ` Took this enchanting beauty from 1.3B$ garden home, thanks for this awesome camera.`,
  postImage = "https://images.pexels.com/photos/46164/field-of-rapeseeds-oilseed-rape-blutenmeer-yellow-46164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}) {
  return (
    <div className="sm:col-start-1 sm:col-end-6 bg-white p-4">
      <div className="flex w-full justify-between items-center my-2">
        <div className="flex gap-2 items-center">
          <VariableUserImage src={userImage} />
          <div>
            <h1 className="text-sm">{username}</h1>
            <p className="text-xs">{followers} followers</p>
          </div>
        </div>
        <div>
          <HiOutlineDotsVertical />
        </div>
      </div>
      <hr />
      {/* post areas */}
      <div className="flex flex-col my-4 ">
        <h1 className="mb-2">{caption}</h1>
        <div className="my-2 w-full flex items-center justify-center">
          <img className="max-h-72 max-w-full " src={postImage} alt="" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <div className="border w-10 h-10 flex items-center justify-center text-stone-700 rounded-full hover:text-green-500 hover:cursor-pointer hover:bg-green-50 duration-300 transition-all">
            <GrLike />
          </div>
          <p className="text-center text-xs text-green-500">210</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="border w-10 h-10 flex items-center justify-center text-stone-700 rounded-full hover:text-red-500 hover:cursor-pointer hover:bg-red-50 duration-300 transition-all">
            <GrDislike />
          </div>
          <p className="text-center text-xs text-red-500">2</p>
        </div>
      </div>
    </div>
  );
}
