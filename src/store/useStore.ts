import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type BlogState = {
  query: string;
  input: string;
  setQuery: (query?: string) => void;
  setInput: (input: string) => void;
};

export const useStore = create<BlogState>()(
  devtools(
    persist(
      (set) => ({
        query: "",
        input: "",
        setQuery: (query?: string) => {
          set({ query });
        },
        setInput: (input: string) => {
          set({ input });
        },
      }),
      {
        name: "blog-storage",
      }
    )
  )
);
