import axios from "axios";
import { AllPostsSchema, postSchema, userSchema } from "../utils/posts-schemas";
import { PostsType, UserType } from "../types";

export async function getAllPosts(search? : string) {
  
  const url = search ? `https://dummyjson.com/posts/search?q=${search}` :"https://dummyjson.com/posts";
  try {
    const { data } = await axios(url);
    const result = AllPostsSchema.safeParse(data);
    if (result.success) {
      return result.data;
    } else {
      console.error("Error parsing data: ", result.error);
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

export async function getPost(id: PostsType["id"]) {
  const url = `https://dummyjson.com/posts/${id}`;
  try {
    const { data } = await axios(url);
    const result = postSchema.safeParse(data);
    if (result.success) {
      return result.data;
    } else {
      console.log("Error parsing data: ", result.error);
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

export async function getUser(id: UserType["id"]) {
  const url = `https://dummyjson.com/users/${id}`;
  try {
    const { data } = await axios(url);
    const result = userSchema.safeParse(data);
    if (result.success) {
      return result.data;
    } else {
      console.error("Error parsing data: ", result.error);
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
