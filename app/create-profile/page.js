import React from "react";
import CreateProfileForm from "../_components/CreateProfileForm";
export default function page() {
  return (
    <div className="w-full p-4 bg-white flex items-center flex-col h-100">
      <h1 className="font-bold border-b ">Create Profile</h1>
      <br />
      <CreateProfileForm />
    </div>
  );
}
