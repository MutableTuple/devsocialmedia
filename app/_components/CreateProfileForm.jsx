import React from "react";
import Button from "./Button";
import { BsSendFill } from "react-icons/bs";
import { MdInsertLink } from "react-icons/md";
export default function CreateProfileForm() {
  return (
    <form className=" flex flex-col gap-4 w-72 items-center h-100 ">
      <img
        className="h-24 w-24 rounded-full outline outline-offset-4 outline-green-400"
        src="https://avatars.githubusercontent.com/u/96367458?v=4"
        alt=""
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter full name.."
        className="border px-2 py-3  focus:outline-none focus:ring-1 focus:ring-green-300 w-full transition-all duration-300 outline-none"
      />
      <textarea
        type="text"
        name=""
        id=""
        placeholder="Enter a short description.."
        className="border px-2 py-3 min-h-24  focus:outline-none focus:ring-1 focus:ring-green-300 w-full transition-all duration-300 outline-none "
      />
      <div className="flex w-full">
        <select
          name="userType"
          id="userType"
          defaultValue="I'm a student"
          className="border px-2 py-1  w-full  focus:outline-none focus:ring-1 focus:ring-green-300 "
        >
          <option value="I'm an undergrad student">
            I&apos;m an undergrad student
          </option>
          <option value="I'm a graduate student">
            I&apos;m a graduate student
          </option>
          <option value="I'm a student">I&apos;m a student</option>
        </select>
      </div>

      <button className="bg-black border-2 border-black text-center text-white px-4 py-2 w-full hover:bg-white hover:text-black  flex justify-center items-center gap-2 ">
        Go to my profile
        <BsSendFill />
      </button>
    </form>
  );
}
