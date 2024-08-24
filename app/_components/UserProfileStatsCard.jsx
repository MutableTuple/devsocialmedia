import React from "react";
import Button from "./Button";
export default function UserProfileStatsCard() {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-8 justify-between items-center border-b p-8">
      <div className="flex gap-8">
        <img
          className="md:h-32 md:w-32 h-24 w-24 rounded-full outline outline-4 outline-offset-4 outline-green-300"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNbqQRg1H6GFITxlRkHAWgY7nyhM1BW2XEg&s"
          alt=""
        />
        <div className="flex  flex-col justify-around">
          <h1 className="font-bold text-md md:text-xl">Jonas Schmedtmann</h1>
          <p className="text-xs md:text-sm">Software Developer & instructor</p>
          <div className="flex gap-2 ">
            <Button>SUBSCRIBE</Button>
            <Button primary={true}>FOLLOW</Button>
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-between">
        <div className="text-center">
          <h1 className="font-bold text-xl">2,142</h1>
          <p>Followers</p>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-xl">2,142</h1>
          <p>Followers</p>
        </div>{" "}
        <div className="text-center">
          <h1 className="font-bold text-xl">2,142</h1>
          <p>Followers</p>
        </div>
      </div>
    </div>
  );
}
