import React from "react";
import VariableUserImage from "./VariableUserImage";
import ReusableIcons from "./ReusableIcons";
import {
  MdOutlinePhoto,
  MdOutlineLocationOn,
  MdOutlinePoll,
  MdSend,
} from "react-icons/md";
import { getServerSession } from "next-auth";
import PostIdeas from "./PostIdeas";
import { getUser } from "../_lib/data-service";
import { createPostAction } from "../_lib/actions";

export default async function UserPostBox() {
  const session = await getServerSession();

  const loggedInUser = await getUser(session?.user?.email);

  return (
    <form
      className="grid sm:grid-cols-8 grid-cols-1 sm:grid-rows-1 grid-rows-2  my-4 sm:gap-8 gap-3 sm:px-0 px-4 h-fit"
      action={createPostAction}
    >
      <div className="sm:col-start-1 sm:col-end-6 bg-white">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex gap-4">
            <VariableUserImage src={loggedInUser?.image} />
            <input
              type="text"
              name="post_text"
              id=""
              className="border-b outline-none "
              placeholder="write your mind ..."
            />
          </div>
          <div className="flex gap-4 justify-between">
            <div className="flex gap-4">
              <div className="h-9 w-9 rounded-full border border-blue-100 flex items-center justify-center text-blue-400 hover:cursor-pointer hover:bg-blue-50">
                <MdOutlinePhoto size={20} />
              </div>{" "}
              <div className="h-9 w-9 rounded-full border border-red-100 flex items-center justify-center text-red-400 hover:cursor-pointer hover:bg-red-50">
                <MdOutlineLocationOn size={20} />
              </div>{" "}
              <div className="h-9 w-9 rounded-full border border-green-100 flex items-center justify-center text-green-400 hover:cursor-pointer hover:bg-green-50">
                <MdOutlinePoll size={20} />
              </div>
            </div>
            <button className="px-4 py-2 bg-black flex items-center gap-2 text-white hover:bg-green-500">
              POST <MdSend />
            </button>
          </div>
        </div>
      </div>
      <PostIdeas />
    </form>
  );
}
