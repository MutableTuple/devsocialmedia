import { supabase } from "./supabase";

export async function getAllUsers() {
  const { data, error } = await supabase.from("Users").select("*");

  return data;
}
export async function getAllPosts() {
  const { data, error } = await supabase.from("Post").select("*");

  return data;
}
