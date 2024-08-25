"use server"; // This is for defining server components and server actions
import { signIn } from "./auth";

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
