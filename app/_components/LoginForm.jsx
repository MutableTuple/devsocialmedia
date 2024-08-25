import Link from "next/link";
import React from "react";
import { BsSendFill } from "react-icons/bs";
export default function LoginForm() {
  return (
    <form className=" flex flex-col gap-4 w-72 items-center h-100 ">
      <input
        type="email"
        name=""
        id=""
        placeholder="Enter your email.."
        className="border px-2 py-3  focus:outline-none focus:ring-1 focus:ring-green-300 w-full transition-all duration-300 outline-none"
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="Enter your password.."
        className="border px-2 py-3   focus:outline-none focus:ring-1 focus:ring-green-300 w-full transition-all duration-300 outline-none "
      />
      <button className="bg-black border-2 border-black text-center text-white px-4 py-2 w-full hover:bg-white hover:text-black  flex justify-center items-center gap-2 ">
        Login
        <BsSendFill />
      </button>
      <p>
        don&apos;t have an account? <Link href="/">signup</Link>
      </p>
    </form>
  );
}
