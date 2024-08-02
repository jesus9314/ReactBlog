import { z } from "zod";
import { AllPostsSchema, postSchema, userSchema } from "../utils/posts-schemas";

export type PostsType = z.infer<typeof postSchema>;
export type AllPostsType = z.infer<typeof AllPostsSchema>;
export type UserType = z.infer<typeof userSchema>;
