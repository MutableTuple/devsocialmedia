import React from "react";
import FollowActionButtons from "./FollowActionButtons";

export default function FollowingNotification() {
  return (
    <div className="bg-white w-full flex justify-between items-center gap-8 p-4">
      <div className="flex gap-8">
        <img
          className="h-16 w-16 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dsDR9Wjx-Rc345eb1vLlgvorlAJC_Nz6-A&s"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <div className="flex">
            <h1 className="text-xs sm:text-sm">
              <strong> Elon Musk </strong> started following you
            </h1>
          </div>
          <div className="flex gap-2 sm:gap-4 ">
            <FollowActionButtons primary={false}>Discard</FollowActionButtons>{" "}
            <FollowActionButtons primary={true}>
              Follow Back
            </FollowActionButtons>
          </div>
        </div>
      </div>
      <div className="text-xs text-stone-600">9hrs ago</div>
    </div>
  );
}
