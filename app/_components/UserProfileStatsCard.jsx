import React from "react";
import Button from "./Button";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../_lib/auth";
import { getUser } from "../_lib/data-service";
import { formatNumber } from "../_utils/utils";
import { getUserById } from "@/app/_lib/data-service";
import { FaCheckCircle } from "react-icons/fa";
export default async function UserProfileStatsCard({ userId }) {
  const user = await getUserById(userId);
  console.log("USER  sasdsd", user);
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-8 justify-between items-center border-b p-8">
      <div className="flex gap-8">
        <img
          className="md:h-32 md:w-32 h-24 w-24 rounded-full outline outline-4 outline-offset-4 outline-stone-800 object-cover"
          src={user.image}
          alt={user.name}
        />
        <div className="flex  flex-col justify-around">
          <h1 className="font-bold text-md md:text-xl flex gap-2 items-center">
            {user.name} <FaCheckCircle />
            <span className="bg-gradient-to-r from-slate-300 via-gray-400 to-gray-500 px-2 py-1 text-xs rounded-md text-white">
              metallic
            </span>
          </h1>
          <p className="text-xs md:text-sm mb-2 sm:mb-0">{user.description}</p>
          <div className="flex gap-2 ">
            <Button>SUBSCRIBE</Button>
            <Button primary={true}>FOLLOW</Button>
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-between">
        <div className="text-center">
          <h1 className="font-bold text-xl">
            {formatNumber(user.followers_count)}
          </h1>
          <p>Followers</p>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-xl">
            {" "}
            {formatNumber(user.following_count)}
          </h1>
          <p>Following</p>
        </div>{" "}
        <div className="text-center">
          <h1 className="font-bold text-xl">{user.subscribers | 2}</h1>
          <p>SUBSCRIBERS</p>
        </div>
      </div>
    </div>
  );
}
