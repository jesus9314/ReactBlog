import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type BlogState = {
  query: string;
  setQuery: (query?: string) => void;
};

export const useStore = create<BlogState>()(
  devtools(
    persist(
      (set) => ({
        query: "",
        setQuery: (query?: string) => {
          set({ query });
        },
      }),
      {
        name: "blog-storage",
      }
    )
  )
);
