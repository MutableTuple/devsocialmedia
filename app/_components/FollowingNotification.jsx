import React from "react";
import FollowActionButtons from "./FollowActionButtons";

export default function FollowingNotification() {
  return (
    <div className="bg-white w-full flex gap-8 p-4">
      <img
        className="h-16 w-16 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dsDR9Wjx-Rc345eb1vLlgvorlAJC_Nz6-A&s"
        alt=""
      />
      <div className="flex flex-col justify-between">
        <div className="flex">
          <img src="" alt="" />
          <h1 className="text-sm">
            <strong> Elon Musk </strong> started following your for absolutely
            no reason!
          </h1>
        </div>
        <div className="flex gap-4">
          <FollowActionButtons primary={false}>Discard</FollowActionButtons>{" "}
          <FollowActionButtons primary={true}>Follow Back</FollowActionButtons>
        </div>
      </div>
    </div>
  );
}
