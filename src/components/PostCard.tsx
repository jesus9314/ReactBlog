import { PostsType } from "../types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import CardOwner from "./CardOwner";

type PostCardProps = {
  post: PostsType;
};
export default function PostCard({ post }: PostCardProps) {
  const postLink = `/posts/${post.id}`;
  return (
    <Card className="max-w-[400px] mx-auto">
      <CardHeader className="flex gap-3">
        <CardOwner userId={post.userId}/>
      </CardHeader>
      <Divider />
      <CardBody>
        <Link
          href={postLink}
          className="text-lg line-clamp-1 font-semibold pb-2"
        >
          <p>{post.title}</p>
        </Link>
        <p className="line-clamp-5">{post.body}</p>
        <span className="pt-2 font-semibold">
          {post.tags.map((tag) => `#${tag} `)}
        </span>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex space-x-4">
          <div
            aria-label="Likes"
            className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
          >
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline
                  points="6 23 1 23 1 12 6 12"
                  fill="none"
                  strokeMiterlimit="10"
                />
                <path
                  d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="font-semibold">{post.reactions.likes}</p>
          </div>
          <div
            aria-label="Comments"
            className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
          >
            <div className="mr-2">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                width="24"
                height="24"
                className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M336 256 A80 80 0 0 1 256 336 A80 80 0 0 1 176 256 A80 80 0 0 1 336 256 z"
                />
              </svg>
            </div>
            <p className="font-semibold">81</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
