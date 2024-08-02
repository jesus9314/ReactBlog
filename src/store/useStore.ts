import { create } from "zustand";
import { AllPostsType, PostsType, UserType } from "../types";
import { devtools, persist } from "zustand/middleware";
import { getAllPosts, getPost, getUser } from "../services";

type BlogState = {
  posts: AllPostsType | null;
  post: PostsType | null;
  user: UserType | null;
  fetchingPosts: () => Promise<void>;
  fetchingApost: (id: PostsType["id"]) => Promise<void>;
  fetchingUser: (id: UserType["id"]) => Promise<void>;
};

export const useStore = create<BlogState>()(
  devtools(
    persist(
      (set) => ({
        posts: null,
        post: null,
        user: null,
        fetchingPosts: async () => {
          const posts = await getAllPosts();
          set({
            posts,
            post: null,
          });
        },
        fetchingApost: async (id) => {
          const post = await getPost(id);
          set({
            post,
          });
        },
        fetchingUser: async (id) => {
          const user = await getUser(id);
          set({
            user,
          });
        },
      }),
      {
        name: "blog-storage",
      }
    )
  )
);
