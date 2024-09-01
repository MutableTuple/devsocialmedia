"use server"; // This is for defining server components and server actions

import { signIn } from "./auth";
import { createPost, getUser } from "./data-service";
import { getServerSession } from "next-auth";

export async function signInAction() {
  try {
    await signIn("github", {
      redirectTo: "/",
    });
  } catch (error) {
    console.error("Failed to sign in:", error.message);
    throw new Error("Sign in failed");
  }
}

export async function createPostAction(formData) {
  const session = await getServerSession();
  console.log("CURRENT SESSION", session);
  const currentUser = await getUser(session.user.email);
  try {
    await createPost({
      owner: currentUser.id,
      post_text: formData.get("post_text"),
      post_image: "https://avatars.githubusercontent.com/u/179363993?v=4",
      post_likes: 0,
      post_dislikes: 0,
    });
  } catch (error) {
    console.log(error);
  }
}
