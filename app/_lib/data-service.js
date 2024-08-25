import { supabase } from "./supabase";

export async function getAllUsers() {
  const { data, error } = await supabase.from("Users").select("*");

  return data;
}
export async function getAllPosts() {
  const { data, error } = await supabase.from("Post").select("*");

  return data;
}

export async function createUser(newUser) {
  const { data, error } = await supabase
    .from("Users")
    .insert([newUser])
    .select();

  console.log("USER ADDED", data);
  if (error) {
    console.log("USER NOT ADDED");
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}
export async function getUser(email) {
  const { data, error } = await supabase
    .from("Users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}
export async function getUserById(id) {
  const { data, error } = await supabase
    .from("Users")
    .select("*")
    .eq("id", id)
    .single();
  return data;
}
