"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginInWithGithubButton() {
  const [status, setStatus] = useState(""); // State for managing status

  const handleLoginWithGithub = async () => {
    setStatus("pending"); // Set status to pending when sign-in starts

    try {
      const result = await signIn("github", {
        callbackUrl: `/user/profile/`, // Redirect after sign-in
        redirect: false, // Handle redirection manually
      });

      if (result.error) {
        setStatus("error"); // Set status to error if sign-in fails
        console.error("Sign-in failed:", result.error);
      } else {
        setStatus("success"); // Set status to success if sign-in is successful
      }
    } catch (error) {
      setStatus("error"); // Set status to error if an exception occurs
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleLoginWithGithub}
        className="border-2 border-black text-center px-6 py-2 w-full hover:bg-white hover:text-black flex justify-center items-center gap-2 w-fit"
      >
        <img
          src="https://authjs.dev/img/providers/github.svg"
          alt=""
          className="h-6 w-6"
        />
        Login in with GitHub
      </button>
      {/* {status === "pending" && <p>Signing in...</p>}
      {status === "success" && <p>Successfully signed in!</p>}
      {status === "error" && <p>Error during sign-in. Please try again.</p>} */}
    </div>
  );
}
