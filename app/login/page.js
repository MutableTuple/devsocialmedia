import React from "react";
import LoginButton from "../_components/LoginWithGithubButton";
import LoginForm from "../_components/LoginForm";
export default function page() {
  return (
    <div className=" bg-white ">
      <div className="flex flex-col items-center gap-8 py-4">
        <h1 className="font-bold border-b">Login to your account</h1>
        <LoginForm />
        <div className="border-b w-[240px] ">
          <div className="text-stone-600 uppercase text-xs">
            or login with the options below!
          </div>
        </div>
        <LoginButton />
      </div>
    </div>
  );
}
