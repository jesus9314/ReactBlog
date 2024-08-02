import { useParams } from "react-router-dom";
import { useStore } from "../store/useStore";
import { useEffect } from "react";

export default function PostPage() {
  const { postId } = useParams();
  const numberId = postId && parseInt(postId);
  const { fetchingApost, post } = useStore();
  useEffect(() => {
    if (numberId) {
      fetchingApost(numberId);
    }
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4">
          <a
            href="/"
            aria-label="Article"
            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
          >
            {post?.title}
          </a>
        </div>
        <p className="text-base text-gray-700 md:text-lg">{post?.body}</p>
      </div>
      <div className="mb-10 sm:text-center">
        <a href="/" aria-label="Author" className="inline-block mb-1">
          <img
            alt="avatar"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="object-cover w-10 h-10 rounded-full shadow-sm"
          />
        </a>
        <div>
          <a
            href="/"
            aria-label="Author"
            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Vasile Melinte
          </a>
          <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
        </div>
      </div>
      <div className="sm:text-center"></div>
    </div>
  );
}
